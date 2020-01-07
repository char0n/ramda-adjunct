'use strict';

const glob = require('glob'); // eslint-disable-line import/no-extraneous-dependencies
const path = require('path');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: [
    '@babel/polyfill',
    ...glob.sync('./test/*.js', {
      ignore: ['./test/mocha-bootstrap.js'],
    }),
  ],
  output: {
    path: path.resolve('.'),
    filename: 'tmp-test-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                forceAllTransforms: true,
              },
            ],
          ],
          plugins: [
            [
              '@babel/plugin-transform-modules-commonjs',
              {
                loose: true,
              },
            ],
          ],
        },
      },
    ],
  },
};
