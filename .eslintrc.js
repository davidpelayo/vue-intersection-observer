const eslintConfig = {
  extends: [
    'plugin:vue/recommended',
  ],
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'standard',
  rules: {
    'arrow-parens': 0,
    'no-console': 2,
    'no-undef': 2,
    'no-unreachable': 2,
    'no-unused-vars': 2,
    'semi': [2, 'always'],
    'no-debugger': 2,
    'import/default': 2,
    'import/extensions': [2, {
      'js': 'never',
      'vue': 'always',
      'json': 'always',
      'scss': 'always',
    }],
    'import/group-exports': 2,
    'import/named': 2,
    'import/newline-after-import': 2,
    'import/no-default-export': 2,
    'import/export': 2,
    'import/exports-last': 2,
    'block-spacing': [2, 'always'],
    'arrow-spacing': [2, { before: true, after: true }],
    'keyword-spacing': 2,
    'spaced-comment': 2,
    'no-multi-spaces': 2,
    'array-bracket-spacing': [2, 'never'],
    'object-curly-spacing': [2, 'always']
  },
};

module.exports = eslintConfig;