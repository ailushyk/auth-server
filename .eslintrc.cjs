module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // 'react/self-closing-comp': [
    //   'error',
    //   {
    //     component: true,
    //     html: true,
    //   },
    // ],
    // 'react/jsx-curly-brace-presence': [
    //   'error',
    //   {
    //     props: 'never',
    //     children: 'never',
    //   },
    // ],
  },
}
