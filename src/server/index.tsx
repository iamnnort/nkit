import * as React from 'react';
import * as express from 'express';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouter, matchPath } from 'react-router-dom';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import thunk from 'redux-thunk';
import { I18nextProvider } from 'react-i18next';

import staticFiles from './middlewares/staticFiles';
import i18n from './middlewares/i18n';

import { Request } from './types';
import template from './template';

import Root from '../common/pages/Root/Root.container';
import { ServerStyleSheet, ThemeProvider } from '../common/theme/styled-components';
import { theme } from '../common/theme/theme';
import reducer from '../common/store';
import routes from '../common/routes';

const PORT = process.env.PORT || 3000;

const server = express();

server.use(staticFiles);
server.use(i18n);

server.get('*', (req: Request, res: express.Response) => {
  const sheet = new ServerStyleSheet();
  const context = {};
  const initialState = {};
  const middleware = applyMiddleware(thunk);
  const store = createStore(reducer, initialState, middleware);
  const serverFetch = routes
    .filter((route) => matchPath(req.url, route) && route.serverFetch)
    .map((route) =>
      Promise.all(
        bindActionCreators(route.serverFetch, store.dispatch)({
          match: matchPath(req.url, route),
        })
      )
    );

  Promise.all(serverFetch).then(() => {
    const body = renderToString(
      sheet.collectStyles(
        <I18nextProvider i18n={req.i18n}>
          <StoreProvider store={store}>
            <StaticRouter location={req.url} context={context}>
              <ThemeProvider theme={theme}>
                <Root />
              </ThemeProvider>
            </StaticRouter>
          </StoreProvider>
        </I18nextProvider>
      )
    );
    const styles = sheet.getStyleTags();
    const helmet = Helmet.renderStatic();
    const state = store.getState();

    const i18nLanguage = req.i18n.language;
    const i18nState = req.i18n.languages.reduce(
      (state, language) => ({
        ...state,
        [language]: req.i18n.services.resourceStore.data[language],
      }),
      {}
    );

    res.send(
      template({
        body,
        styles,
        helmet,
        state,
        i18n: {
          language: i18nLanguage,
          state: i18nState,
        },
      })
    );
  });
});

server.listen(PORT, () => console.log(`App listening on http://127.0.0.1:${PORT} [OK]`));
