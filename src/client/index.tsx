import 'idempotent-babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as initReactFastclick from 'react-fastclick';
import { removeUniversalPortals } from 'react-portal-universal';

import { ThemeProvider } from '../common/theme/styled-components';
import { theme } from '../common/theme/theme';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider as StoreProvider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import Root from '../common/pages/Root/Root.container';
import reducer, { State } from '../common/store';

import env from '../common/lib/helpers/env';
import '../common/i18n';

declare global {
  interface Window {
    __PRELOADED_STATE__: State;
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
