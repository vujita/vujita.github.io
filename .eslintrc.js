const extendConfigs = ['prettier', 'prettier/react'];

module.exports = {
  ignorePatterns: ['**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@nrwl/nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: '*',
                onlyDependOnLibsWithTags: ['*'],
              },
            ],
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@nrwl/nx/typescript', ...extendConfigs],
      parserOptions: {
        project: './tsconfig.*?.json',
      },
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:@nrwl/nx/javascript', ...extendConfigs],
      rules: {},
    },
  ],
  extends: [...extendConfigs],
  plugins: ['@nrwl/nx', 'sort-keys-fix', 'prettier'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
  },
  root: true,
};
