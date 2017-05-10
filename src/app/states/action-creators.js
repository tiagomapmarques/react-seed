import { ACTIONS_SUFFIX } from './types';
import { actionCreators as scientistsActions } from './scientists/actions';

const actionsToThunks = (actionsObject, dispatch) => Object.keys(actionsObject)
  .reduce((accumulator, key) => ({
    ...accumulator,
    [key]: (...args) => dispatch(actionsObject[key](...args)),
  }), {});

export const actions = {
  scientistsActions,
};

export const actionSelector = (...args) => dispatch => {
  const selected = Object.keys(actions)
    .filter(key => args.indexOf(key.substring(0, key.length - ACTIONS_SUFFIX.length)) >= 0)
    .reduce((accumulator, key) => ({
      ...accumulator,
      [key]: actionsToThunks(actions[key], dispatch),
    }), {});
  Object.keys(selected).forEach(item => {
    selected[item].init && typeof selected[item].init === 'function' && selected[item].init();
  });
  return selected;
};
