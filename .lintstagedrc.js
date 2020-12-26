const path = require('path');

require('ts-node').register({
  project: path.join(__dirname, 'tools', 'tsconfig.tools.json'),
  preferTsExts: true,
  transpileOnly: true,
});
module.exports = {
  '*.md': 'markdownlint',
  '*': (files) => {
    const ignorePatterns = [/rc$/, /ignore$/];
    const filterIgnoreFiles = (file) => {
      for (let i = 0; i < ignorePatterns.length; i++) {
        const p = ignorePatterns[i];
        if (p.test(file)) {
          return false;
        }
      }
      return true;
    };
    const editFiles = files.filter(filterIgnoreFiles);
    const commaSepFileList = editFiles.join(',');

    return commaSepFileList.length > 0
      ? [
          `prettier --write ${editFiles.join(' ')}`,
          `nx format:write --files=${commaSepFileList}`,
          `git add ${editFiles.join(' ')}`,
        ]
      : [];
  },
};
