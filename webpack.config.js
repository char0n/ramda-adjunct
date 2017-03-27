'use strict';

const webpack = require('webpack');

const minimizeTrait = {
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

const ra = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: './dist',
    filename: 'RA.node.js',
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
    }],
  },
};

const raMin = Object.assign({
  entry: './src/index.js',
  target: 'node',
  output: {
    path: './dist',
    filename: 'RA.node.min.js',
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
    }],
  },
}, minimizeTrait);

const raWeb = {
  entry: './src/index.js',
  target: 'web',
  output: {
    path: './dist',
    filename: 'RA.web.js',
    libraryTarget: 'umd',
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
    }],
  },
};


const raWebMin = Object.assign({
  entry: './src/index.js',
  target: 'web',
  output: {
    path: './dist',
    filename: 'RA.web.min.js',
    libraryTarget: 'umd',
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
    }],
  },
}, minimizeTrait);

const raWebStandalone = {
  entry: './src/index.js',
  target: 'web',
  output: {
    path: './dist',
    filename: 'RA.web.standalone.js',
    libraryTarget: 'umd',
    library: 'RA',
  },
  module: {
    loaders: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
};

const rawWebStandaloneMin = Object.assign({
  entry: './src/index.js',
  target: 'web',
  output: {
    path: './dist',
    filename: 'RA.web.standalone.min.js',
    libraryTarget: 'umd',
    library: 'RA',
  },
  module: {
    loaders: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
}, minimizeTrait);


module.exports = [
  ra, raMin, raWeb, raWebMin, raWebStandalone, rawWebStandaloneMin,
];

