import 'idempotent-babel-polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store } from 'redux';

import env from '../common/lib/helpers/env';

import App from './App';

const makeApp = (store: Store) => {
  function hydrateEntireTree(Component: typeof App) {
    ReactDOM.hydrate(<Component store={store} />, document.getElementById('root'));
  }

  hydrateEntireTree(App);

  if (env.isDevelopment()) {
    if ((module as any).hot) {
      (module as any).hot.accept('./App', () => {
        hydrateEntireTree(require('./App').default);
      });
    }
  }
};

export default makeApp;
