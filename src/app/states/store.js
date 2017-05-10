import { createStore as reduxCreateStore } from 'redux';

import { reducers } from './reducers';

export const createStore = (initialState) => {
  const store = reduxCreateStore(
    reducers,
    initialState,
    window.devToolsExtension && window.devToolsExtension(),
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers');  // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
