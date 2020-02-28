import 'idempotent-babel-polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './client';
import env from '@common/lib/helpers/env';

function hydrateEntireTree(Component: typeof App) {
  ReactDOM.hydrate(<Component />, document.getElementById('root'));
}

hydrateEntireTree(App);

if (env.isDevelopment()) {
  if ((module as any).hot) {
    (module as any).hot.accept('./client', () => {
      hydrateEntireTree(require('./client').default);
    });
  }
}
