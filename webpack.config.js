'use strict';

const webpack = require('webpack');

const RaMin = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'RA.min.js',
    libraryTarget: 'var',
    library: 'RA',
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
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],
};

const RaStandaloneMin = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'RA-standalone.min.js',
    libraryTarget: 'var',
    library: 'RA',
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
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: false,
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],
};

module.exports = [
  RaMin, RaStandaloneMin,
];

