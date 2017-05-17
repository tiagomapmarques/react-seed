import * as Dedux from 'react-dedux';

import { Scientist } from 'models/scientist';
import { ScientistsService } from 'services/scientists';
import { StateStatus } from 'states/status';

import {
  typeName, ScientistsStateActions,
  ScientistsStateChangersNames as stateChangers,
} from './types';

const getType = Dedux.getConfig().getActionType;

export const actions: ScientistsStateActions = {

  init: () => (dispatch, getState) => {
    if (getState().scientists.status === StateStatus.start) {
      dispatch({ ...getType(typeName, stateChangers.loading) });
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
      ...getType(typeName, stateChangers.setAll),
      scientists,
    }),

  add: (name, title) => dispatch =>
    dispatch({
      ...getType(typeName, stateChangers.add),
      name,
      title,
    }),

  remove: (id: number|string) => dispatch =>
    dispatch({
      ...getType(typeName, stateChangers.remove),
      id,
    }),
};
