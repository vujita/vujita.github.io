/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const { load, exec, concurrent } = require('@xarc/run');
const rimraf = require('rimraf');
const copyDir = require('copy-dir');
const ghPages = require('gh-pages');

const runManyForTarget = (target, ...options) =>
  exec(
    `nx run-many --target="${target}" --all --parallel${
      options.length > 0 ? ' ' : ''
    }${options.join(' ')}`,
  );
const ghDir = path.join(__dirname, 'deploy');
const publishGhFolder = () => {
  ghPages.publish(ghDir, (err) => {
    if (err) {
      console.log('publish error occurred', err);
    } else {
      console.log('publish successful');
    }
  });
};
const clean = [exec('rimraf dist tmp coverage')];
if (process.env.CI) {
  clean.push('clean:cache');
}
const createDeployDir = () => {
  const vubnguyenSrc = path.join(__dirname, 'dist', 'apps', 'vubnguyen');
  if (fs.existsSync(ghDir)) {
    rimraf.sync(ghDir);
  }
  fs.mkdirSync(ghDir);
  copyDir.sync(vubnguyenSrc, ghDir);
  const fileToCopy = ['CNAME'];
  fileToCopy.forEach((f) => {
    fs.copyFileSync(path.join(__dirname, f), path.join(ghDir, f));
  });
};

load({
  'build:all': [
    'clean',
    'gen-css',
    'build:scss:types',
    concurrent('format:check:all', 'lint:all'),
    runManyForTarget('build', '--prod'),
  ],
  // 'build:scss:types': exec('nx run-many --target=tsm-build --all'),
  'build:scss:types': [
    exec('rimraf libs/styles/src/**/*.d.ts'),
    exec(
      'tsm libs/styles/src/lib --exportType default --exportTypeInterface ClassesType',
    ),
  ],
  clean,
  'clean:cache': exec('rimraf node_modules/.cache'),
  createDeployDir: ['test:all', createDeployDir],
  'e2e:all': [runManyForTarget('e2e')],
  'e2e:headless:all': [runManyForTarget('e2e', '--headless')],
  'format:all': [runManyForTarget('format:write')],
  'format:check:all': [runManyForTarget('format:check')],
  'gen-css': [runManyForTarget('gen-css')],
  'lint:all': [
    concurrent('build:scss:types', 'prettier'),
    'format:all',
    concurrent(
      runManyForTarget('lint', '--fix'),
      runManyForTarget('lint-styles', '--fix'),
    ),
  ],
  prettier: [exec('prettier --write .'), 'stylelint', 'format:all'],
  prod: exec('nx serve --configuration=production'),
  'publish:gh-pages': ['createDeployDir', publishGhFolder],
  serve: concurrent(exec('nx serve'), 'watch:scss:types'),
  stylelint: exec('stylelint "**/*.{css,scss}" --fix'),
  'test:all': [
    'build:all',
    concurrent('format:check:all', 'test:unit', 'e2e:all'),
  ],
  'test:ci:all': [
    'clean:cache',
    'build:all',
    concurrent('format:check:all', 'test:unit', 'e2e:headless:all'),
  ],
  'test:unit': [exec('rimraf coverage'), runManyForTarget('test')],
  'watch:scss:types': concurrent(
    exec('nx run vubnguyen:tsm-build --watch'),
    exec('nx run styles:tsm-build --watch'),
  ),
});
