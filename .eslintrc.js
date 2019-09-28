module.exports = {
  root: true,
  plugins: [
    'cypress'
  ],
  env: {
    node: true,
    'cypress/globals': true
  },
  extends: ['@vue/airbnb', 'plugin:vue/recommended'],
  rules: {
    'no-console': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'function-paren-newline': 'off',
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: false }],
    'func-names': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
