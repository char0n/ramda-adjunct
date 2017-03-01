'use strict';

const glob = require('glob'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  target: 'web',
  entry: glob.sync('./test/*.js'),
  output: {
    path: '.',
    filename: 'tmp-test-bundle.js',
  },
  externals: {
    ramda: 'R',
  },
  module: {
    loaders: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: [
          ['es2015', { loose: true, modules: false }],
        ],
      },
    }],
  },
};
