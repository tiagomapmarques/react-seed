import { config } from '../config';
import { ScientistsService } from '../../services/scientists';
import { stateChangers } from './reducer';
import { typeName } from './types';

export const actionCreators = {

  init: () => (dispatch, getState) => !getState().scientists && actionCreators.fetchAll()(dispatch),

  fetchAll: () => dispatch => ScientistsService.fetchAll()
    .then(scientists => actionCreators.setAll(scientists)(dispatch)),

  setAll: (scientists) => dispatch => dispatch({
    ...config.getActionType(typeName, stateChangers.setAll),
    scientists,
  }),

  add: (name, title) => dispatch => dispatch({
    ...config.getActionType(typeName, stateChangers.add),
    name,
    title,
  }),

  remove: (id) => dispatch => dispatch({
    ...config.getActionType(typeName, stateChangers.remove),
    id,
  }),
};
