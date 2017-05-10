
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseEnvironment = require('./base.environment');

const devEnvironment = Object.assign({}, baseEnvironment, {
  devtool: 'cheap-module-source-map',
  devServer: Object.assign({}, baseEnvironment.devServer, {
    hot: true,
  });
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8000/',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    baseEnvironment.entry,
  ],
  plugins: [
    new CopyWebpackPlugin([{
      from: '../assets/',
      to: 'assets/',
    }]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});

module.exports = devEnvironment;
