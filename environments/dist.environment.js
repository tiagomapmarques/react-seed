
const webpack = require('webpack');

const baseEnvironment = require('./base.environment');

const distEnvironment = Object.assign({}, baseEnvironment, {
  cache: false,
  plugins: [
    ...baseEnvironment.plugins,
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});

module.exports = distEnvironment;