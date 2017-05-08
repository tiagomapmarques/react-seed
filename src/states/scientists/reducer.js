import { typeName } from './types';
import { actionProducers } from './actions';

export const reducer = (state, action) => {
  const actionType = action.type.split('/');
  if (actionType[0] === typeName) {
    return actionProducers[actionType[1]](state, action);
  }
  return state || [];
};
