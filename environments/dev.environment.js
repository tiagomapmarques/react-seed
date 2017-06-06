
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseEnvironment = require('./base.environment');

const devEnvironment = Object.assign({}, baseEnvironment, {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8000/',
    baseEnvironment.entry,
  ],
  plugins: (baseEnvironment.plugins || []).concat([
    new CopyWebpackPlugin([{
      from: '../assets/',
      to: 'assets/',
    }]),
    new webpack.NoEmitOnErrorsPlugin(),
  ]),
});

module.exports = devEnvironment;
