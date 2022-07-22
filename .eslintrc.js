module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
    jquery: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: ["error", 4],
  },
};
