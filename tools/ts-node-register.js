const path = require('path');

require('ts-node').register({
  project: path.resolve(__dirname, 'tsconfig.tools.json'),
  preferTsExts: true,
  transpileOnly: true,
});
