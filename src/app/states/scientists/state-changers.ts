import { StateStatus } from 'states/status';

import {
  ScientistsStateChangers,
  ScientistsSetAllAction, ScientistsAddAction, ScientistsRemoveAction,
} from './types';

export const stateChangers: ScientistsStateChangers = {

  loading: (prevState, _) => ({ ...prevState, status: StateStatus.loading }),

  setAll: (_, action: ScientistsSetAllAction) => action.scientists,

  add: (prevState, action: ScientistsAddAction) => ({
    status: StateStatus.ready,
    list: [
      ...(prevState.list || []),
      action.scientist,
    ],
  }),

  remove: (prevState, action: ScientistsRemoveAction) => ({
    status: StateStatus.ready,
    list: (prevState.list || []).filter(scientist => scientist.id !== action.id),
  }),
};
