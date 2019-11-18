import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import Icon from './Icon';
import { ComponentProps } from './Icon.types';

describe('IconComponent', () => {
  let wrapper: ReactWrapper;

  const props: ComponentProps = {
    type: 'checkMark',
    variant: 'default',
  };

  beforeEach(async () => {
    wrapper = mount(<Icon {...props} />);
  });

  it(`should not regret`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
