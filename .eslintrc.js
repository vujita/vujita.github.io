module.exports = {
  root: true,
  env: {
    "jest/globals": true,
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ["airbnb", "plugin:@typescript-eslint/recommended", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
    "jest",
    "sort-keys-fix",
    "sort-destructure-keys",
  ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        js: "never",
        jsx: "never",
        mjs: "never",
      },
    ],
    "sort-keys-fix/sort-keys-fix": "warn",
    "sort-keys": ["error", "asc", { natural: false }],
    "sort-vars": ["error", { ignoreCase: true }],
    "jsx-a11y/control-has-associated-label": 1,
    "import/no-extraneous-dependencies": 1,
    "react/button-has-type": 0,
  },
};
