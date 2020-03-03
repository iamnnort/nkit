import * as React from 'react';

import * as initReactFastclick from 'react-fastclick';
import { removeUniversalPortals } from 'react-portal-universal';

import { HelmetProvider } from 'react-helmet-async';

import { ThemeProvider } from '@common/theme/styled-components';
import { theme } from '@common/theme/theme';

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider as StoreProvider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import { useSSR } from 'react-i18next';

import Root from '@common/pages/Root/Root.container';
import reducer, { State } from '@common/store/reducer';
import sagas from '@common/store/sagas';

import env from '@common/lib/helpers/env';
import i18n from '@common/i18n';

declare global {
  interface Window {
    __PRELOADED_STATE__: State;
    __PRELOADED_I18N_STATE__: {
      [language: string]: object;
    };
    __PRELOADED_LANGUAGE__: string;
  }
}

i18n();
initReactFastclick();
removeUniversalPortals();

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const store = createStore(reducer, preloadedState, env.isDevelopment() ? composeWithDevTools(middleware) : middleware);
sagaMiddleware.run(sagas);

const preloadedI18nState = window.__PRELOADED_I18N_STATE__;
delete window.__PRELOADED_I18N_STATE__;
const preloadedLanguage = window.__PRELOADED_LANGUAGE__;
delete window.__PRELOADED_LANGUAGE__;

const App = () => {
  useSSR(preloadedI18nState, preloadedLanguage);

  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <Root />
          </HelmetProvider>
        </ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
