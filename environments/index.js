'use strict';

const defaultEnvironment = 'dev';

module.exports = (env) => {
  const environment = env || defaultEnvironment;
  const config = require(`./${environment}.environment`);
  return { environment, config };
}
