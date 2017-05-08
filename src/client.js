import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotLoaderContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import { createStore } from './states';
import { HomeContainer } from './containers/home/index';

const store = createStore();

const createRoot = (AppElement) => {
  ReactDOM.render(
    <HotLoaderContainer>
      <Provider store={store}>
        { AppElement }
      </Provider>
    </HotLoaderContainer>,
    document.getElementById('app'),
  );
};

createRoot(<HomeContainer />);

if (module.hot) {
  module.hot.accept('./containers/home/index', () => {
    const NextApp = require('./containers/home/index').HomeContainer; // eslint-disable-line global-require
    createRoot(<NextApp />);
  });
}
