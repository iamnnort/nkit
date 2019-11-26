import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import HeaderComponent from './Header';

jest.mock('./LangSwitcher/LangSwitcher', () => global.mockComponent('LangSwitcher'));

describe('HeaderComponent', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<HeaderComponent />);
  });

  it(`should not regret`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
