import * as React from 'react';
import * as initReactFastclick from 'react-fastclick';
import { removeUniversalPortals } from 'react-portal-universal';

import { HelmetProvider } from 'react-helmet-async';

import { ThemeProvider } from '@common/theme/styled-components';
import { theme } from '@common/theme/theme';

import { Store } from 'redux';
import { Provider as StoreProvider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import { useSSR } from 'react-i18next';

import Root from '@common/pages/Root/Root.container';

declare global {
  interface Window {
    __PRELOADED_I18N_STATE__: {
      [language: string]: object;
    };
    __PRELOADED_LANGUAGE__: string;
  }
}

const preloadedI18nState = window.__PRELOADED_I18N_STATE__;
delete window.__PRELOADED_I18N_STATE__;
const preloadedLanguage = window.__PRELOADED_LANGUAGE__;
delete window.__PRELOADED_LANGUAGE__;

initReactFastclick();
removeUniversalPortals();

const AppComponent: React.FC<{ store: Store }> = ({ store }) => {
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

export default AppComponent;
