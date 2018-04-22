'use strict';

const glob = require('glob'); // eslint-disable-line import/no-extraneous-dependencies
const path = require('path');

module.exports = {
  target: 'web',
  entry: glob.sync('./test/*.js', {
    ignore: './test/typescript.js',
  }),
  output: {
    path: path.resolve('.'),
    filename: 'tmp-test-bundle.js',
  },
  externals: {
    ramda: 'R',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules\/(?!(chai-as-promised))/,
        loader: 'babel-loader',
      },
    ],
  },
};
