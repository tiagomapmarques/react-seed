import { ScientistsService } from '../../services/scientists';
import { typeName } from './types';

export const actionCreators = {

  init: () => (dispatch, getState) => !getState().scientists && actionCreators.fetchAll()(dispatch),

  fetchAll: () => (dispatch) => ScientistsService.fetchAll()
    .then(scientists => actionCreators.setAll(scientists)(dispatch)),

  setAll: (scientists) => (dispatch) => dispatch({ type: `${typeName}/setAll`, scientists }),

  add: (name, title) => (dispatch) => dispatch({ type: `${typeName}/add`, name, title }),

  remove: (id) => (dispatch) => dispatch({ type: `${typeName}/remove`, id }),
};

export const stateChangers = {

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
