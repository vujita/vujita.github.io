const { load, exec, concurrent } = require('@xarc/run');
const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const copyDir = require('copy-dir');
const ghPages = require('gh-pages');

const runManyForTarget = (target, ...options) =>
  exec(
    `nx run-many --target="${target}" --all${
      options.length > 0 ? ' ' : ''
    }${options.join(' ')}`
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
  prettier: exec('prettier --write *.*'),
  clean: exec('rimraf dist tmp coverage'),
  createDeployDir: ['test:all', createDeployDir],
  'format:all': [runManyForTarget('format:write')],
  'format:check:all': [runManyForTarget('format:check')],
  'lint:all': [runManyForTarget('lint', '--fix')],
  'build:all': [
    'clean',
    runManyForTarget('build', '--prod'),
    'format:check:all',
    'lint:all',
  ],
  'e2e:all': [runManyForTarget('e2e')],
  'publish:gh-pages': ['createDeployDir', publishGhFolder],
  'test:unit': [exec('rimraf coverage'), runManyForTarget('test')],
  'test:all': [
    'build:all',
    concurrent('format:check:all', 'test:unit', 'e2e:all'),
  ],
});
