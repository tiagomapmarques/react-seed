import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotLoaderContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import { createStore } from 'states';
import { Routing } from 'containers/routing';

const mainTagId = 'app';
const store = createStore();

const createRoot = (App) => {
  ReactDOM.render(
    <HotLoaderContainer>
      <Provider store={store}>
        { App }
      </Provider>
    </HotLoaderContainer>,
    document.getElementById(mainTagId),
  );
};

createRoot(<Routing />);

if (module.hot) {
  module.hot.accept('./containers/routing', () => {
    const NextApp = require('./containers/routing').Routing; // eslint-disable-line global-require
    createRoot(<NextApp />);
  });
}
