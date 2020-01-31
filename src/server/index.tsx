import * as React from 'react';
import * as express from 'express';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { I18nextProvider } from 'react-i18next';

import staticFiles from '@server/middlewares/staticFiles';
import i18n from '@server/middlewares/i18n';

import config from '@server/config';
import { Request } from '@server/types';
import template from '@server/template';

import Root from '@common/pages/Root/Root.container';
import { ServerStyleSheet, ThemeProvider } from '@common/theme/styled-components';
import { theme } from '@common/theme/theme';
import reducer from '@common/store/reducer';
import { waitAll } from '@common/store/sagas';
import { routes } from '@common/routes';
import { matchRoutes } from 'react-router-config';

const server = express();

server.use(staticFiles);
server.use(i18n);

server.get('*', (req: Request, res: express.Response) => {
  const sheet = new ServerStyleSheet();
  const context = {};
  const initialState = {};
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(sagaMiddleware);
  const store = createStore(reducer, initialState, middleware);

  const preloaders = matchRoutes(routes, req.url)
    .filter(({ route }) => route.preload)
    .map(({ route, match }) => route.preload({ match }))
    .reduce((preloaders, preloader) => preloaders.concat(preloader), []);
  const runTasks = sagaMiddleware.run(waitAll(preloaders));

  runTasks.toPromise().then(() => {
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
      (state, language: string) => ({
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

  store.dispatch(END);
});

server.listen(config.port, () => console.log(`App listening on http://127.0.0.1:${config.port} [OK]`));
