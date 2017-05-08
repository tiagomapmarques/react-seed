import { bindActionCreators } from 'redux';

import { ACTIONS_SUFFIX } from './types';
import { actionCreators as scientistsActions } from './scientists/actions';

export const actions = {
  scientistsActions,
};

export const actionSelector = (...args) => dispatch => Object.keys(actions)
  .filter(key => args.indexOf(key.substring(0, key.length - ACTIONS_SUFFIX.length)) >= 0)
  .reduce((accumulator, key) => ({
    ...accumulator,
    [key]: bindActionCreators(actions[key](dispatch), dispatch),
  }), {});
