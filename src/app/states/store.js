import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';

const middleware = [ thunk ];
if (window.devToolsExtension) {
  middleware.push(window.devToolsExtension());
}

export const createStore = (initialState) => {
  const store = reduxCreateStore(reducers, initialState, applyMiddleware(...middleware));

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');  // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
