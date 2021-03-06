import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import HomeComponent from './Home';
import { TestProvider } from '@test/index';
import * as gitActions from '@common/store/git/actions';

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
          html_url: 'https://github.com/iamnnort/nkit/releases/tag/v1',
          id: 1,
          name: 'Release v1',
          tag_name: 'v1',
        },
      ],
    },
  };

  beforeEach(() => {
    global.apiMock.onGet('https://api.github.com/repos/iamnnort/nkit/releases').replyOnce(200, [
      {
        id: 1,
        name: 'Release v1',
        tag_name: 'v1',
        html_url: 'https://github.com/iamnnort/nkit/releases/tag/v1',
      },
    ]);

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
    const loadReleaseRequest = jest.spyOn(gitActions, 'loadReleaseRequest');

    expect(loadReleaseRequest).toHaveBeenCalledTimes(0);

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

    expect(loadReleaseRequest).toHaveBeenCalledTimes(1);
  });
});
