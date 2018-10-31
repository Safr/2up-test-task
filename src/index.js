import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';

const rootEl = document.getElementById('root');

const renderApp = (Component) => render(
  <Provider store={store}>
    <Component />
  </Provider>,
  rootEl,
);

renderApp(App);

if (module.hot) module.hot.accept(App, () => renderApp(App));

serviceWorker.unregister();
