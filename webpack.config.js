'use strict';

/* eslint no-console: "off" */
const webpackConfigs = require('./conf/webpack');
const defaultConfig = 'dev';

module.exports = (configName) => {
  const LoadedConfig = (configName && webpackConfigs[configName]) || webpackConfigs[defaultConfig];
  const loadedInstance = new LoadedConfig();

  // Set the global environment
  process.env.NODE_ENV = loadedInstance.env;

  return loadedInstance.config;
};
