'use strict';

const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const glob = require('glob'); // eslint-disable-line import/no-extraneous-dependencies
const path = require('path');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: [
    'core-js/stable',
    'regenerator-runtime/runtime',
    ...glob
      .globSync('./test/*.js', {
        ignore: ['./test/mocha-bootstrap.js'],
      })
      .map((filePath) => `./${filePath}`),
  ],
  output: {
    path: path.resolve('.'),
    filename: 'tmp-test-bundle.js',
  },
  performance: {
    maxEntrypointSize: 2000000,
    maxAssetSize: 2000000,
  },
  resolve: {
    fallback: {
      assert: require.resolve('assert'),
      process: require.resolve('process/browser.js'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
};
