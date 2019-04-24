import * as React from 'react';
import * as express from 'express';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { StaticRouter, matchPath } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider as StoreProvider } from 'react-redux';

import { ServerStyleSheet, ThemeProvider } from '../client/theme/styled-components';
import { theme } from '../client/theme/theme';

import Root from '../client/pages/Root/Root';
import reducer from '../client/store';
import routes from '../client/routes';

import template from './template';

const PORT = process.env.PORT || 3000;

const server = express();

server.use(express.static('build'));

server.get('*', (req, res) => {
  const sheet = new ServerStyleSheet();
  const context = {};
  const store = createStore(reducer);

  const dataRequirements = routes
    .filter(route => matchPath(req.url, route) && route.serverFetch)
    .map(route => route.serverFetch);

  Promise.all(dataRequirements).then(() => {
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

server.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
