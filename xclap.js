const { load, exec, concurrent } = require('@xarc/run');

const runManyForTarget = (target, ...options) =>
  exec(
    `nx run-many --target="${target}" --all${
      options.length > 0 ? ' ' : ''
    }${options.join(' ')}`
  );
load({
  prettier: exec('prettier --write *.*'),
  clean: exec('rimraf dist tmp coverage'),
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
  'test:unit': [exec('rimraf coverage'), runManyForTarget('test')],
  'test:all': [
    'build:all',
    concurrent('format:check:all', 'test:unit', 'e2e:all'),
  ],
});
