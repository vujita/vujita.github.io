const path = require('path');

require('ts-node').register({
  project: path.join(__dirname, 'tools', 'tsconfig.tools.json'),
  preferTsExts: true,
  transpileOnly: true,
});

module.exports = {
  '*.md': 'markdownlint',
  '*': (files) => {
    const commaSepFileList = files.join(',');
    console.log(`Running format:write on these files ${commaSepFileList}`);
    return [
      `prettier --write ${files.join(' ')}`,
      `nx format:write --files=${commaSepFileList}`,
      `git add ${files.join(' ')}`,
    ];
  },
};
