import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './pages/Root';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
const store = configureStore();
render(
    <Provider store={store}>
      <Root />
    </Provider>,
  document.getElementById('root')
);

