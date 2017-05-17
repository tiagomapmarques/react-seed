
const webpack = require('webpack');

const baseEnvironment = require('./base.environment');

const loadersToDist = loaders => loaders.map(loader => {
  if (loader.options && loader.options.localIdentName) {
    return Object.assign({}, loader, {
      options: Object.assign({}, loader.options, { localIdentName: '[hash:base64:32]' }),
    });
  }
  return loader;
});

const distEnvironment = Object.assign({}, baseEnvironment, {
  cache: false,
  plugins: [
    ...baseEnvironment.plugins,
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: Object.assign({}, baseEnvironment.module, {
    rules: baseEnvironment.module.rules.map(rule => {
      if (rule.loaders) {
        return Object.assign({}, rule, { loaders: loadersToDist(rule.loaders) });
      } else {
        return rule;
      }
    }),
  }),
});

module.exports = distEnvironment;
