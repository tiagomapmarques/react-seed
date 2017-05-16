import { reducer } from 'react-dedux';

import { config } from '../config';
import { StateStatus } from '../status';
import {
  typeName, defaultValue, ScientistsStateChangers,
  ScientistsSetAllAction, ScientistsAddAction, ScientistsRemoveAction,
} from './types';

const stateChangersObject: ScientistsStateChangers = {

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

export const stateChangers = reducer(typeName, defaultValue, stateChangersObject, config);
