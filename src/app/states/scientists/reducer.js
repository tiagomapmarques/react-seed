import { typeName } from './types';
import { stateChangers } from './actions';

export const reducer = (prevState, action) => {
  const actionType = action.type.split('/');
  if (actionType[0] === typeName) {
    return stateChangers[actionType[1]](prevState, action);
  }
  return prevState || null;
};
