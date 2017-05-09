import { ScientistsService } from '../../services/scientists';
import { typeName } from './types';

export const actionCreators = dispatch => ({
  fetchAll: () => ({ type: `${typeName}/fetchAll`, dispatch }),
  setAll: scientists => ({ type: `${typeName}/setAll`, scientists }),
  add: (name, title) => ({ type: `${typeName}/add`, name, title }),
  remove: id => ({ type: `${typeName}/remove`, id }),
});

export const actionProducers = {
  fetchAll: (prevState, action) => {
    ScientistsService.fetchAll()
      .then(scientists => action.dispatch(actionCreators().setAll(scientists)));
    return prevState;
  },
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
