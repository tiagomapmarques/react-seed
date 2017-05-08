import { connect as reduxConnect } from 'react-redux';

import { actionSelector } from './action-creators';
import { reducerSelector } from './reducers';

export { createStore } from './store';
export { stateTypes, statePropTypes } from './types';

export const connect = (...args) => Component =>
  reduxConnect(reducerSelector(...args), actionSelector(...args))(Component);
