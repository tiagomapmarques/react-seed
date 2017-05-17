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

  add: (name, title) => (dispatch, getState) => ScientistsService.add(name, title, getState().scientists.list)
    .then((scientist: Scientist) => dispatch({
      ...getType(typeName, stateChangers.add),
      scientist,
    }))
    .catch(() => {
      // TODO treat the error
    }),

  remove: (id) => (dispatch, getState) => ScientistsService.remove(id, getState().scientists.list)
    .then((removedId: number) => dispatch({
      ...getType(typeName, stateChangers.remove),
      id: removedId,
    }))
    .catch(() => {
      // TODO treat the error
    }),
};
