module.exports = {
  collectCoverage: true,
  coverageDirectory: '../../coverage/apps/vubnguyen',
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  displayName: 'vubnguyen',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  preset: '../../jest.preset.js',
  testPathIgnorePatterns: ['<rootDir>/src/assets'],
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      { configFile: './babel-jest.config.json', cwd: __dirname },
    ],
  },
};
