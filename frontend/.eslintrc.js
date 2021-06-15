module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      'never',
      { jsx: 'always', png: 'always', jpg: 'always', css: 'always' }
    ]
  }
};
