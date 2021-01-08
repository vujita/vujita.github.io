module.exports = {
  plugins: [
    // We have to require our plugin or vscode prettier plugin won't work properly
    require('prettier-plugin-organize-imports'),
    require('prettier-plugin-packagejson'),
    require('prettier-plugin-sort-json'),
    require('prettier-plugin-packagejson'),
  ],
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
};
