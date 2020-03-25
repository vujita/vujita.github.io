module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["prettier", "plugin:react/recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["prettier", "react", "@typescript-eslint"],
  rules: {
    quotes: 0, // Let prettier handle this instead
    "operator-linebreak": 0,
    "prettier/prettier": "error",
  },
};
