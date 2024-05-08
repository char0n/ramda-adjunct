'use strict';

const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const nonMinimizeTrait = {
  optimization: {
    minimize: false,
    usedExports: false,
    concatenateModules: false,
  },
};

const minimizeTrait = {
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            warnings: false,
          },
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
};

const ra = {
  mode: 'production',
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.resolve('./dist'),
    filename: 'RA.node.js',
    libraryTarget: 'umd',
    library: 'RA',
  },
  externals: 'ramda',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { node: 4 },
                debug: false,
                modules: 'auto',
                useBuiltIns: false,
                forceAllTransforms: true,
                ignoreBrowserslistConfig: true,
              },
            ],
          ],
        },
      },
    ],
  },
  ...nonMinimizeTrait,
};

const raMin = {
  mode: 'production',
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.resolve('./dist'),
    filename: 'RA.node.min.js',
    libraryTarget: 'umd',
    library: 'RA',
  },
  externals: 'ramda',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { node: 4 },
                debug: false,
                modules: 'auto',
                useBuiltIns: false,
                forceAllTransforms: true,
                ignoreBrowserslistConfig: true,
              },
            ],
          ],
        },
      },
    ],
  },
  ...minimizeTrait,
};

const raWeb = {
  mode: 'production',
  entry: './src/index.js',
  target: 'web',
  output: {
    path: path.resolve('./dist'),
    filename: 'RA.web.js',
    libraryTarget: 'umd',
    library: 'RA',
  },
  externals: {
    ramda: 'R',
  },
  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 400000,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                debug: false,
                modules: 'auto',
                useBuiltIns: false,
                forceAllTransforms: true,
                ignoreBrowserslistConfig: false,
              },
            ],
          ],
        },
      },
    ],
  },
  ...nonMinimizeTrait,
};

const raWebMin = {
  mode: 'production',
  entry: './src/index.js',
  target: 'web',
  output: {
    path: path.resolve('./dist'),
    filename: 'RA.web.min.js',
    libraryTarget: 'umd',
    library: 'RA',
  },
  externals: {
    ramda: 'R',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                debug: false,
                modules: 'auto',
                useBuiltIns: false,
                forceAllTransforms: true,
                ignoreBrowserslistConfig: false,
              },
            ],
          ],
        },
      },
    ],
  },
  ...minimizeTrait,
};

const raWebStandalone = {
  mode: 'production',
  entry: './src/index.js',
  target: 'web',
  output: {
    path: path.resolve('./dist'),
    filename: 'RA.web.standalone.js',
    libraryTarget: 'umd',
    library: 'RA',
  },
  performance: {
    maxEntrypointSize: 950000,
    maxAssetSize: 950000,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                debug: false,
                modules: 'auto',
                useBuiltIns: false,
                forceAllTransforms: true,
                ignoreBrowserslistConfig: false,
              },
            ],
          ],
        },
      },
    ],
  },
  ...nonMinimizeTrait,
};

const rawWebStandaloneMin = {
  mode: 'production',
  entry: './src/index.js',
  target: 'web',
  output: {
    path: path.resolve('./dist'),
    filename: 'RA.web.standalone.min.js',
    libraryTarget: 'umd',
    library: 'RA',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                debug: false,
                modules: 'auto',
                useBuiltIns: false,
                forceAllTransforms: true,
                ignoreBrowserslistConfig: false,
              },
            ],
          ],
        },
      },
    ],
  },
  ...minimizeTrait,
};

module.exports = [
  ra,
  raMin,
  raWeb,
  raWebMin,
  raWebStandalone,
  rawWebStandaloneMin,
];
