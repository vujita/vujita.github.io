/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
const { load, exec, concurrent, serial } = require('@xarc/run');
const rimraf = require('rimraf');
const copyDir = require('copy-dir');
const ghPages = require('gh-pages');
const waitOn = require('wait-on');

const isCI = process.env.CI === 'true';
console.log('isCI', isCI);
const waitUrl = (url: string) => waitOn({ resources: [url] });

const runManyForTarget = (target: string, ...options: string[]) =>
  exec(
    `nx run-many --target="${target}" --all --parallel${
      isCI ? ' --skip-nx-cache' : ''
    }${options.length > 0 ? ' ' : ''}${options.join(' ')}`,
  );
const ghDir = path.join(__dirname, 'deploy');
const publishGhFolder = () => {
  ghPages.publish(ghDir, (err: typeof Error) => {
    if (err) {
      console.log('publish error occurred', err);
    } else {
      console.log('publish successful');
    }
  });
};
const clean = [exec('rimraf dist tmp coverage')];
if (isCI) {
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
    'bundlesize',
  ],
  'build:scss:types': [
    exec('rimraf libs/styles/src/**/*.d.ts'),
    exec(
      'tsm libs/styles/src/lib --exportType default --exportTypeInterface ClassesType',
    ),
  ],
  bundlesize: 'bundlesize',
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
  postinstall: [exec('patch-package'), 'test:ci:all'],
  prettier: [exec('prettier --write .'), 'stylelint', 'format:all'],
  prod: exec('nx serve --configuration=production'),
  'publish:gh-pages': ['createDeployDir', publishGhFolder],
  serve: concurrent(
    exec('nx serve'),
    'watch:scss:types',
    'storybook',
    serial(
      () => waitUrl('http://localhost:4400/'),
      exec('open http://localhost:4400/'),
    ),
    serial(
      () => waitUrl('http://localhost:4200/'),
      exec('open http://localhost:4200/'),
    ),
  ),
  storybook: exec('nx run ui-storybook:storybook'),
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
  'test:unit': [
    'clean:cache',
    exec('rimraf coverage'),
    runManyForTarget('test'),
  ],
  'test:unit:update': [
    'clean:cache',
    'clean',
    exec('jest --clearCache'),
    runManyForTarget('test', '--updateSnapshot'),
  ],
  'watch:scss:types': concurrent(
    'build:scss:types',
    exec(
      'tsm libs/styles/src/lib --exportType default --exportTypeInterface ClassesType',
    ),
  ),
});
