import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import FeaturesComponent from './Features';
import { FeaturesSearch, FeaturesListItem, FeaturesTitle } from './Features.styled';
import { ComponentProps } from './Features.types';
import { Icon } from '../../../components';

describe('FeaturesComponent', () => {
  let wrapper: ReactWrapper;

  const props: ComponentProps = {
    features: [
      {
        value: 'React - Main library',
      },
    ],
  };

  const helpers = {
    search(value: string) {
      const input = wrapper.find(FeaturesSearch);
      input.simulate('change', { target: { value } });
    }
  }

  beforeEach(async () => {
    wrapper = mount(<FeaturesComponent {...props} />);
  });

  it(`should not regret`, () => {
    expect(wrapper).toMatchSnapshot();
  });

  it(`should render FeaturesListItem ${props.features.length} time(s)`, () => {
    expect(wrapper.find(FeaturesListItem).length).toEqual(props.features.length);
  });

  it(`should render FeaturesListItem depends on a search string`, () => {
    wrapper.setProps({
      features: [
        {
          value: 'React - Main library',
        },
        {
          value: 'Redux - Global store',
        },
      ],
    });

    helpers.search('redux');

    expect(
      wrapper.find(FeaturesListItem).filterWhere((featuresListItem) => featuresListItem.prop('isSelected') === true)
        .length
    ).toEqual(1);
  });

  describe('should have FeaturesSearch which', () => {
    it(`should have a default value`, () => {
      expect(wrapper.find(FeaturesSearch).prop('value')).toEqual('re');
    });

    it(`should have a new value after firing onChange event`, () => {
      helpers.search('new value');

      expect(wrapper.find(FeaturesSearch).prop('value')).toEqual('new value');
    });
  });

  describe('should have FeaturesTitle which', () => {
    it(`should set a title`, () => {
      expect(wrapper.find(FeaturesTitle).text()).toEqual('general:features');
    });
  });

  describe('should have FeaturesListItem which', () => {
    it(`should have an icon`, () => {
      expect(wrapper.exists(Icon)).toEqual(true);
    });
  });
});
