
const webpack = require('webpack');

const baseEnvironment = require('./base.environment');

const testEnvironment = Object.assign({}, baseEnvironment, {
  devtool: 'inline-source-map',
  devServer: undefined,
  // TODO missing cofigs?
  // externals: {
  //   cheerio: 'window',
  //   'react/addons': 'true',
  //   'react/lib/ExecutionEnvironment': 'true',
  //   'react/lib/ReactContext': 'true',
  // },
  // context: undefined,
  // module: { loaders: ... },
  // output: undefined,
  // plugins: undefined,
  // resolve: undefined,
});

module.exports = testEnvironment;
