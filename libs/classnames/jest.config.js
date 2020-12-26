module.exports = {
  coverageDirectory: '../../coverage/libs/classnames',
  displayName: 'classnames',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      { configFile: './babel-jest.config.json', cwd: __dirname },
    ],
  },
};
