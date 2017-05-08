import { ScientistsService } from '../../services/scientists';
import { typeName } from './types';

export const actionCreators = dispatch => ({
  fetchAll: () => ({ type: `${typeName}/fetchAll`, dispatch }),
  setAll: scientists => ({ type: `${typeName}/setAll`, scientists }),
  add: (id, name, title) => ({ type: `${typeName}/add`, id, name, title }),
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
    { id: action.id, name: action.name, title: action.title },
  ],
};
