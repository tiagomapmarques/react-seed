'use strict';

const getConfig = require('./environments');
const nodeEnvMap = {
  dev: 'dev',
  dist: 'production',
  test: 'test',
}

module.exports = configName => {
  const env = getConfig(configName);

  // Set the global environment
  process.env.NODE_ENV = nodeEnvMap[env.environment];

  return env.config;
};
