import js from '@eslint/js';
import importX from 'eslint-plugin-import-x';
import mocha from 'eslint-plugin-mocha';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import ramda from 'eslint-plugin-ramda';

export default [
  js.configs.recommended,
  prettierConfig,
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'lib/**',
      'es/**',
      'docs/**',
      'coverage/**',
      '.nyc_output/**',
      'tmp-test-bundle.js',
      'types/**',
    ],
  },
  {
    plugins: {
      'import-x': importX,
      mocha,
      prettier,
      ramda,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        exports: 'readonly',
        Buffer: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        Promise: 'readonly',
        Map: 'readonly',
        Set: 'readonly',
        WeakMap: 'readonly',
        WeakSet: 'readonly',
        Symbol: 'readonly',
        BigInt: 'readonly',
        Proxy: 'readonly',
        Reflect: 'readonly',
        ArrayBuffer: 'readonly',
        DataView: 'readonly',
        Int8Array: 'readonly',
        Uint8Array: 'readonly',
        Uint8ClampedArray: 'readonly',
        Int16Array: 'readonly',
        Uint16Array: 'readonly',
        Int32Array: 'readonly',
        Uint32Array: 'readonly',
        Float32Array: 'readonly',
        Float64Array: 'readonly',
        BigInt64Array: 'readonly',
        BigUint64Array: 'readonly',
      },
    },
    rules: {
      'no-underscore-dangle': 'off',
      'no-confusing-arrow': 'off',
      'object-curly-newline': 'off',
      'import-x/order': [
        'error',
        {
          groups: [
            ['builtin', 'external', 'internal'],
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
        },
      ],
      'import-x/extensions': ['error', 'always', { ignorePackages: true }],
      quotes: ['error', 'single', { avoidEscape: true }],
      'prettier/prettier': 'error',
      'ramda/always-simplification': 'error',
      'ramda/compose-simplification': 'error',
      'ramda/eq-by-simplification': 'error',
      'ramda/prefer-complement': 'error',
      'ramda/prefer-both-either': 'error',
    },
  },
  {
    files: ['test/**/*.js', 'test/**/*.mjs'],
    plugins: {
      mocha,
    },
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        after: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        context: 'readonly',
        specify: 'readonly',
        xdescribe: 'readonly',
        xit: 'readonly',
        xcontext: 'readonly',
        xspecify: 'readonly',
        document: 'readonly',
      },
    },
    rules: {
      ...mocha.configs.recommended.rules,
      'mocha/no-mocha-arrows': 'off',
      'mocha/max-top-level-suites': 'off',
      'mocha/no-setup-in-describe': 'off',
      'mocha/consistent-spacing-between-blocks': 'off',
      'no-unused-vars': 'off',
    },
  },
  {
    files: ['**/*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },
];
