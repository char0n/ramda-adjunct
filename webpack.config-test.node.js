'use strict';

module.exports = {
  target: 'node',
  output: {
    libraryTarget: 'umd',
    library: 'RA',
  },
  externals: {
    ramda: 'ramda',
  },
  module: {
    loaders: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: [
          ['es2015', { loose: true, modules: false }],
          ['stage-3'],
        ],
      },
    }],
  },
};
