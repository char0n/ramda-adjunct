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
      query: {
        presets: [
          ['es2015', { loose: true, modules: false }],
        ],
      },
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
      query: {
        presets: [
          ['es2015', { loose: true, modules: false }],
        ],
      },
    }],
  },
}, minimizeTrait);

const raBrowser = {
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
      query: {
        presets: [
          ['es2015', { loose: true, modules: false }],
        ],
      },
    }],
  },
};


const raBrowserMin = Object.assign({
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
      query: {
        presets: [
          ['es2015', { loose: true, modules: false }],
        ],
      },
    }],
  },
}, minimizeTrait);

const raStandalone = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'RA-standalone.js',
    libraryTarget: 'umd',
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
};

const raStandaloneMin = Object.assign({
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'RA-standalone.min.js',
    libraryTarget: 'umd',
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
}, minimizeTrait);


module.exports = [
  ra, raMin, raBrowser, raBrowserMin, raStandalone, raStandaloneMin,
];

