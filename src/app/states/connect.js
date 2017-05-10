import { connect as connectState } from 'react-redux-states';

import { actionCreators as scientistsActions } from './scientists/actions';

export const actions = {
  scientistsActions,
};

export const connect = (...args) => connectState(actions)(...args);
