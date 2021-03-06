module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    project: './tsconfig.json',
    sourceType: 'module',
    extraFileExtensions: [".scss", ".html"]
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    camelcase: ["error", {properties: "never"}],
    'comma-style': ['error', 'last'],
    'eol-last': ['error', 'always'],
    'max-len': ['error', { code: 120, tabWidth: 2 }],
    'no-explicit-any': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
