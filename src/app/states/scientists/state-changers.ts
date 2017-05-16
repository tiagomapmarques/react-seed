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
      {
        id: 1 + (prevState.list || []).reduce((max, scientist) => Math.max(max, scientist.id), 0),
        name: action.name,
        title: action.title,
      },
    ]
  }),

  remove: (prevState, action: ScientistsRemoveAction) => ({
    status: StateStatus.ready,
    list: (prevState.list || []).filter(scientist => scientist.id !== action.id),
  }),
};
