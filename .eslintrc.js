const extendConfigs = [
  'prettier',
  'prettier/react',
  'plugin:prettier/recommended',
  'plugin:testing-library/recommended',
  'plugin:jest-dom/recommended',
  'plugin:typescript-sort-keys/recommended',
  'kentcdodds',
  'kentcdodds/react',
  'kentcdodds/best-practices',
];
const sharedRules = {
  'jest-dom/prefer-checked': 'error',
  'jest-dom/prefer-enabled-disabled': 'error',
  'jest-dom/prefer-required': 'error',
  'jest/no-disabled-tests': 'warn',
  'jest/no-focused-tests': 'error',
  'jest/no-identical-title': 'error',
  'jest/prefer-to-have-length': 'warn',
  'jest/valid-expect': 'error',
  'prettier/prettier': 'error',
  'react/jsx-uses-react': 'off',
  'react/react-in-jsx-scope': 'off',
  'sort-keys-fix/sort-keys-fix': 'error',
  'testing-library/await-async-query': 'error',
  'testing-library/no-await-sync-query': 'error',
  'testing-library/no-debug': 'warn',
};
module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
    node: true,
  },
  extends: [...extendConfigs],
  ignorePatterns: ['**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],

      rules: {
        ...sharedRules,
        '@nrwl/nx/enforce-module-boundaries': [
          'error',
          {
            allow: [],
            depConstraints: [
              {
                onlyDependOnLibsWithTags: ['*'],
                sourceTag: '*',
              },
            ],
            enforceBuildableLibDependency: true,
          },
        ],
      },
    },
    {
      extends: ['plugin:@nrwl/nx/typescript', ...extendConfigs],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.*?.json',
      },
      rules: { ...sharedRules },
    },
    {
      extends: ['plugin:@nrwl/nx/javascript', ...extendConfigs],
      files: ['*.js', '*.jsx'],
      rules: { ...sharedRules },
    },
    {
      extends: ['plugin:@nrwl/nx/javascript', ...extendConfigs],
      files: ['.eslintrc.js', 'xclap.js'],
      rules: {
        ...sharedRules,
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  plugins: [
    '@nrwl/nx',
    'jest',
    'jest-dom',
    'prettier',
    'sort-keys-fix',
    'testing-library',
    'typescript-sort-keys',
  ],
  root: true,
  rules: { ...sharedRules },
  settings: { 'import/resolver': {} },
};
