module.exports = {
  plugins: ['prettier', '@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'react-app',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    camelcase: 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    semi: ['error', 'never'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      'babel-module': {
        alias: {
          components: 'src/components',
        },
      },
    },
  },
  rules: {
    'object-curly-spacing': ['warn', 'always'],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/state-in-constructor': 'off',
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    'dot-notation': 'off',
    'jsx-a11y/no-autofocus': 'off',
    '@typescript-eslint/dot-notation': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        ignoreRestArgs: true,
      },
    ],
    'max-len': [
      'warn',
      {
        code: 80,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'react/jsx-key': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.test.jsx',
          '**/*.test.ts',
          '**/*.test.tsx',
          'src/tests/**/*',
        ],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-boolean-value': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/destructuring-assignment': 'off',
    'import/no-unresolved': 0,
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/keyword-spacing': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        'no-use-before-define': ['error', { variables: false }],
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/explicit-function-return-type': ['error'],
      },
    },
  ],
}
