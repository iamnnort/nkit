import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import LoaderComponent from '@common/components/Loader/Loader';
import { ComponentProps } from '@common/components/Loader/Loader.types';
import { LoaderError, LoaderSpin } from '@common/components/Loader/Loader.styled';

describe('LoaderComponent', () => {
  let wrapper: ReactWrapper;

  const props: ComponentProps = {
    isInitialLoaded: true,
    isLoading: false,
    error: '',
    render: () => <div id='fakeContent'>Fake Content</div>,
  };

  beforeEach(() => {
    wrapper = mount(<LoaderComponent {...props} />);
  });

  it(`should not regret`, () => {
    expect(wrapper).toMatchSnapshot();
  });

  it(`should render content if it was loaded`, () => {
    expect(wrapper.exists('#fakeContent')).toBe(true);
  });

  it(`should render the error if it was loaded`, () => {
    wrapper.setProps({
      error: 'Fake error',
    });

    expect(wrapper.exists(LoaderError)).toBe(true);
  });

  it(`should render a loader spin if it is still loading`, () => {
    wrapper.setProps({
      isLoading: true,
    });

    expect(wrapper.exists(LoaderSpin)).toBe(true);
  });
});
