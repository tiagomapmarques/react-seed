import { structReducer } from 'react-redux-states';

import { typeName } from './types';

const reducers = {

  setAll: (prevState, action) => action.scientists,

  add: (prevState, action) => [
    ...prevState,
    {
      id: 1 + prevState.reduce((max, scientist) => Math.max(max, scientist.id), 0),
      name: action.name,
      title: action.title,
    },
  ],

  remove: (prevState, action) => prevState.filter(scientist => scientist.id !== action.id),
};

export const stateChangers = Object.keys(reducers).reduce((accumulator, key) => ({
  ...accumulator,
  [key]: key,
}), {});

export const reducer = structReducer(typeName, reducers);
