import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import ReleasesComponent from '@common/pages/Home/Releases/Releases';
import { ComponentProps } from '@common/pages/Home/Releases/Releases.types';

jest.mock('../../../components/Icon/Icon', () => global.mockComponent('Icon'));

describe('ReleasesComponent', () => {
  let wrapper: ReactWrapper;

  const props: ComponentProps = {
    releases: [
      {
        id: 1,
        name: 'Fake name',
        tag_name: 'fake_name',
        html_url: 'fake_url',
      },
    ],
  };

  beforeEach(() => {
    wrapper = mount(<ReleasesComponent {...props} />);
  });

  it(`should not regret`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
