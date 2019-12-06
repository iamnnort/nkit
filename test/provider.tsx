import * as React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';

import { ThemeProvider } from '../src/common/theme/styled-components';
import { theme } from '../src/common/theme/theme';

import { State } from '../src/common/store/reducer';
import sagas from '../src/common/store/sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const mockStore = configureMockStore(middlewares);

export const TestProvider: React.FC<{ store?: State }> = ({ store: customStore = {}, children }) => {
  const store = mockStore(customStore);
  sagaMiddleware.run(sagas);

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <React.Fragment>{children}</React.Fragment>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default TestProvider;
