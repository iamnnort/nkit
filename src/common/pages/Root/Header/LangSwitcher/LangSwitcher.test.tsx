import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import LangSwitcherComponent from './LangSwitcher';
import { LangSwitcherItem } from './LangSwitcher.styled';

describe('LangSwitcherComponent', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<LangSwitcherComponent />);
  });

  it(`should not regret`, () => {
    expect(wrapper).toMatchSnapshot();
  });

  it(`should activate a button after clicked on another one`, () => {
    expect(wrapper.find(LangSwitcherItem).at(0).props().isActive).toBe(false);
    expect(wrapper.find(LangSwitcherItem).at(1).props().isActive).toBe(true);

    wrapper.find(LangSwitcherItem).at(0).simulate('click');
    wrapper = mount(<LangSwitcherComponent />);

    expect(wrapper.find(LangSwitcherItem).at(0).props().isActive).toBe(true);
    expect(wrapper.find(LangSwitcherItem).at(1).props().isActive).toBe(false);

    wrapper.find(LangSwitcherItem).at(1).simulate('click');
    wrapper = mount(<LangSwitcherComponent />);

    expect(wrapper.find(LangSwitcherItem).at(0).props().isActive).toBe(false);
    expect(wrapper.find(LangSwitcherItem).at(1).props().isActive).toBe(true);
  });
});
