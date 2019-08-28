import * as React from 'react';
import { shallow } from 'enzyme';

import FeaturesComponent from './Features';
import { FeaturesListItem, FeaturesTitle } from './Features.styled';
import { Icon } from '../../../components';

function setup() {
  const props = {
    features: [
      {
        value: 'React - Main library',
      },
    ],
  };

  const wrapper = shallow(<FeaturesComponent {...props} />);

  return {
    props,
    wrapper,
  };
}

describe('FeaturesComponent', () => {
  const { props } = setup();
  it(`renders FeaturesListItem ${props.features.length} time(s)`, () => {
    const { wrapper, props } = setup();

    expect(wrapper.find(FeaturesListItem).length).toEqual(props.features.length);
  });

  describe('FeaturesTitle', () => {
    it(`sets a title`, () => {
      const { wrapper } = setup();

      expect(wrapper.find(FeaturesTitle).text()).toEqual('general:features');
    });
  });

  describe('FeaturesListItem', () => {
    it(`has an icon`, () => {
      const { wrapper } = setup();

      expect(wrapper.exists(Icon)).toEqual(true);
    });
  });
});
