import 'idempotent-babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as initReactFastclick from 'react-fastclick';
import { removeUniversalPortals } from 'react-portal-universal';

import { ThemeProvider } from './theme/styled-components';
import { theme } from './theme/theme';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider as StoreProvider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import Root from './pages/Root/Root.container';
import reducer from './store';

import env from './lib/helpers/env';

declare global {
  interface Window {
    __PRELOADED_STATE__: any;
  }
}

initReactFastclick();
removeUniversalPortals();

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const middleware = applyMiddleware(thunk);
const store = createStore(reducer, preloadedState, env.isDevelopment() ? composeWithDevTools(middleware) : middleware);

ReactDOM.hydrate(
  <StoreProvider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
