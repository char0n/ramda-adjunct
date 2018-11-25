'use strict';

const glob = require('glob'); // eslint-disable-line import/no-extraneous-dependencies
const path = require('path');

module.exports = {
  target: 'web',
  entry: [
    require.resolve('babel-polyfill'),
    require.resolve('ramda'),
    ...glob.sync('./test/*.js', {
      ignore: './test/typescript.js',
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
        exclude: /node_modules\/(?!(chai-as-promised|sinon|ramda))/,
        loader: 'babel-loader',
      },
    ],
  },
};
