import { connect as connectState } from 'react-redux-states';

import { config } from './config';
import { actionCreators as scientists } from './scientists/action-creators';

export const actions = {
  scientists,
};

export const connect = (...args) => connectState(actions, config)(...args);
