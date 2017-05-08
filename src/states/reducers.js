import { combineReducers } from 'redux';

import { reducer as scientists } from './scientists/reducer';

const reducersObject = {
  scientists,
};
export const reducers = combineReducers(reducersObject);

export const reducerSelector = (...args) => state => Object.keys(state)
  .filter(key => args.indexOf(key) >= 0)
  .reduce((accumulator, key) => ({ ...accumulator, [key]: state[key] }), {});
