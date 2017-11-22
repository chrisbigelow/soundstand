import React from 'react';
import { Provider } from 'react-redux';
import HashRouter from 'react-router';

const Root = ({store}) => (
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
);