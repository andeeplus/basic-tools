module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    amd: true,
    jest: true
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', 'jsx-a11y', 'prettier'],
  rules: {
    'no-console': 2,
    'no-irregular-whitespace': 'warn',
    'react/react-in-jsx-scope': 'off',
    'no-empty': 'warn',
    'no-inner-declarations': 'warn',
    'no-unreachable': 'warn',
    'prettier/prettier': ['error'],
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-array-index-key': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/default-props-match-prop-types': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
