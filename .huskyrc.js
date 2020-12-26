const tasks = (arr) => arr.join(' && ');

module.exports = {
  hooks: {
    'pre-commit': tasks([
      'sort-npm-scripts',
      'npm-sort',
      'prettier --write package.json',
      'git add package.json',
      'lint-staged --allow-empty',
    ]),
    'pre-push': 'yarn test:all',
  },
};
