import * as React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { HelmetProvider } from 'react-helmet-async';

import { ThemeProvider } from '@common/theme/styled-components';
import { theme } from '@common/theme/theme';

import { State } from '@common/store/reducer';
import sagas from '@common/store/sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const mockStore = configureMockStore(middlewares);

export const TestProvider: React.FC<{ store?: State }> = ({ store: customStore = {}, children }) => {
  const store = mockStore(customStore);
  sagaMiddleware.run(sagas);

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <React.Fragment>{children}</React.Fragment>
        </HelmetProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default TestProvider;
