import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import HeaderComponent from './Header';

describe('HeaderComponent', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<HeaderComponent />);
  });

  it(`should not regret`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
