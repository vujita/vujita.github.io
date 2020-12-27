module.exports = {
  '*.md': 'markdownlint',
  '*.{css|scss}': ['stylelint', 'git add'],
  '*.{js,jsx,ts,tsx,json}': (files) => {
    const ignorePatterns = [/rc$/, /ignore$/, /\.{scss|css}$/];
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
