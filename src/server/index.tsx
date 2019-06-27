import * as React from 'react';
import * as express from 'express';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouter, matchPath } from 'react-router-dom';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import { Provider as StoreProvider } from 'react-redux';
import thunk from 'redux-thunk';

import template from './template';

import Root from '../client/pages/Root/Root.container';
import { ServerStyleSheet, ThemeProvider } from '../client/theme/styled-components';
import { theme } from '../client/theme/theme';
import reducer from '../client/store';
import routes from '../client/routes';

const PORT = process.env.PORT || 3000;

const server = express();

server.use(express.static('build'));

server.get('*', (req: express.Request, res: express.Response) => {
  const sheet = new ServerStyleSheet();
  const context = {};
  const initialState = {};
  const middleware = applyMiddleware(thunk);
  const store = createStore(reducer, initialState, middleware);
  const serverFetch = routes
    .filter(route => matchPath(req.url, route) && route.serverFetch)
    .map(route =>
      Promise.all(
        bindActionCreators(route.serverFetch, store.dispatch)({
          match: matchPath(req.url, route),
        })
      )
    );

  Promise.all(serverFetch).then(() => {
    const body = renderToString(
      sheet.collectStyles(
        <StoreProvider store={store}>
          <StaticRouter location={req.url} context={context}>
            <ThemeProvider theme={theme}>
              <Root />
            </ThemeProvider>
          </StaticRouter>
        </StoreProvider>
      )
    );
    const styles = sheet.getStyleTags();
    const helmet = Helmet.renderStatic();
    const state = store.getState();

    res.send(
      template({
        body,
        styles,
        helmet,
        state,
      })
    );
  });
});

server.listen(PORT, () => console.log(`App listening on http://127.0.0.1:${PORT} [OK]`));
