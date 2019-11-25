import * as React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { ThemeProvider } from '../src/common/theme/styled-components';
import { theme } from '../src/common/theme/theme';

import { State } from '../src/common/store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

export const TestProvider: React.FC<{ store?: State }> = ({ store = {}, children }) => {
  return (
    <StoreProvider store={mockStore(store)}>
      <ThemeProvider theme={theme}>
        <React.Fragment>{children}</React.Fragment>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default TestProvider;
