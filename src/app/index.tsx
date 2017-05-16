import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-dedux';

import { createStore, AppStateValues } from 'states';
import { Routing } from 'containers/routing';

require('./index.style');

const mainTagId = 'app';
const store = createStore<AppStateValues>();

const createRoot = (App: any) => {
  ReactDOM.render(
    <Provider store={store}>
      { App }
    </Provider>,
    document.getElementById(mainTagId)
  );
};

createRoot(<Routing />);
