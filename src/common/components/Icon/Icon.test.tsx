import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import Icon from '@common/components/Icon/Icon';
import { ComponentProps } from '@common/components/Icon/Icon.types';

describe('IconComponent', () => {
  let wrapper: ReactWrapper;

  const props: ComponentProps = {
    type: 'checkMark',
    variant: 'default',
  };

  beforeEach(() => {
    wrapper = mount(<Icon {...props} />);
  });

  it(`should not regret`, () => {
    expect(wrapper).toMatchSnapshot();
  });

  it(`should return default "i" tag if a pair of type/variant is not found`, () => {
    wrapper.setProps({
      variant: 'active',
    });

    expect(wrapper.exists('i')).toBe(true);
  });
});
