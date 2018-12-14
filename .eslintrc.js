module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:jest/recommended"],
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    semi: ["error", "always"]
  }
};
