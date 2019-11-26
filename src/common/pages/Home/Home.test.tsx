import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import * as redux from 'redux';

import HomeComponent from './Home';
import { TestProvider } from '../../../../test';

jest.mock('./Releases/Releases', () => global.mockComponent('Releases'));
jest.mock('./Features/Features', () => global.mockComponent('Features'));

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

  it(`should loader releases if they have not beed loaded`, () => {
    const bindActionCreators = jest.spyOn(redux, 'bindActionCreators');

    expect(bindActionCreators).toHaveBeenCalledTimes(0);

    wrapper = mount(
      <TestProvider
        store={{
          git: {
            isInitialLoaded: false,
            isLoading: false,
            error: '',
            releases: [],
          },
        }}
      >
        <HomeComponent.component />
      </TestProvider>
    );

    expect(bindActionCreators).toHaveBeenCalledTimes(1);
  });
});
