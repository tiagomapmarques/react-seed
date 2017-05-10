import { createStore as createStoreState } from 'react-redux-states';

import { reducer as scientists } from './scientists/reducer';

const reducers = {
  scientists,
};

const hotReloader = store => {
  if (module.hot) {
    module.hot.accept('react-redux-states/reducers', () => {
      const nextReducer = require('react-redux-states/reducers');  // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}

export const createStore = (...args) => createStoreState(reducers, hotReloader)(...args);
