import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import env from '../common/lib/helpers/env';

import reducer, { State } from '../common/store/reducer';
import sagas from '../common/store/sagas';

declare global {
  interface Window {
    __PRELOADED_STATE__: State;
  }
}

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const sagaMiddleware = createSagaMiddleware();
const reduxMiddleware = applyMiddleware(sagaMiddleware);

const makeStore = () => {
  const store = createStore(
    reducer,
    preloadedState,
    env.isDevelopment() ? composeWithDevTools(reduxMiddleware) : reduxMiddleware
  );
  sagaMiddleware.run(sagas);

  if (env.isDevelopment()) {
    if ((module as any).hot) {
      (module as any).hot.accept('../common/store/reducer', () => {
        store.replaceReducer(require('../common/store/reducer').default);
      });
      (module as any).hot.accept('../common/store/sagas', () => {
        sagaMiddleware.run(require('../common/store/sagas').default);
      });
    }
  }

  return store;
};

export default makeStore;
