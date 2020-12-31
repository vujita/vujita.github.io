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
  'react/jsx-uses-react': 'off',
  'react/react-in-jsx-scope': 'off',
  'prettier/prettier': 'error',
  'sort-keys-fix/sort-keys-fix': 'error',
  'testing-library/await-async-query': 'error',
  'testing-library/no-await-sync-query': 'error',
  'testing-library/no-debug': 'warn',
  'jest/no-disabled-tests': 'warn',
  'jest/no-focused-tests': 'error',
  'jest/no-identical-title': 'error',
  'jest/prefer-to-have-length': 'warn',
  'jest/valid-expect': 'error',
  'jest-dom/prefer-checked': 'error',
  'jest-dom/prefer-enabled-disabled': 'error',
  'jest-dom/prefer-required': 'error',
};
module.exports = {
  env: {
    'jest/globals': true,
    browser: true,
    es6: true,
    node: true,
  },
  ignorePatterns: ['**/*'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],

      rules: {
        ...sharedRules,
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
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.*?.json',
      },
      rules: { ...sharedRules },
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:@nrwl/nx/javascript', ...extendConfigs],
      rules: { ...sharedRules },
    },
  ],
  extends: [...extendConfigs],
  settings: { 'import/resolver': {} },
  plugins: [
    '@nrwl/nx',
    'sort-keys-fix',
    'prettier',
    'testing-library',
    'jest',
    'jest-dom',
    'typescript-sort-keys',
    'sort-keys-fix',
  ],
  rules: { ...sharedRules },
  root: true,
};
