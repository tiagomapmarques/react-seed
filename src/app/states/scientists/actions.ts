import { Scientist } from 'models/scientist';
import { ScientistsService } from 'services/scientists';
import { config } from 'states/config';
import { StateStatus } from 'states/status';

import {
  typeName, ScientistsStateActions,
  ScientistsStateChangersNames as stateChangers,
} from './types';

export const actions: ScientistsStateActions = {

  init: () => (dispatch, getState) => {
    if (getState().scientists.status === StateStatus.start) {
      dispatch({ ...config.getActionType(typeName, stateChangers.loading) });
      actions.fetchAll()(dispatch, getState);
    }
  },

  fetchAll: () => (dispatch, getState) => ScientistsService.fetchAll()
    .then((scientists: Scientist[]) => actions.setAll({
      status: StateStatus.ready,
      list: scientists || [],
    })(dispatch, getState))
    .catch(() => actions.setAll({
      status: StateStatus.error,
      list: [],
    })(dispatch, getState)),

  setAll: (scientists) => dispatch =>
    dispatch({
      ...config.getActionType(typeName, stateChangers.setAll),
      scientists,
    }),

  add: (name, title) => dispatch =>
    dispatch({
      ...config.getActionType(typeName, stateChangers.add),
      name,
      title,
    }),

  remove: (id: number|string) => dispatch =>
    dispatch({
      ...config.getActionType(typeName, stateChangers.remove),
      id,
    }),
};
