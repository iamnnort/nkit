import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import HomeComponent from './Home';
import { TestProvider } from '../../../../test';

describe('HomeComponent', () => {
  let wrapper: ReactWrapper;

  const store = {
    git: {
      isInitialLoaded: true,
      isLoading: false,
      error: '',
      releases: [
        {
          html_url: 'https://github.com/nikitapavets/react-ssr-ts-redux/releases/tag/v1',
          id: 1,
          name: 'Release v1',
          tag_name: 'v1',
        },
      ],
    },
  };

  beforeEach(() => {
    wrapper = mount(
      <TestProvider store={store}>
        <HomeComponent.component />
      </TestProvider>
    );
  });

  it(`should not regret`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
