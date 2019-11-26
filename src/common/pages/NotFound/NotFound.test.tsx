import * as React from 'react';
import { Helmet } from 'react-helmet';
import { mount, ReactWrapper } from 'enzyme';

import NotFoundComponent from './NotFound';
import { NotFoundTitle } from './NotFound.styled';

describe('NotFoundComponent', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(<NotFoundComponent.component />);
  });

  it('sets document title', () => {
    const helmet = Helmet.peek();
    expect(helmet.title).toEqual('general:notFound');
  });

  describe('NotFoundTitleComponent', () => {
    it('sets title', () => {
      expect(wrapper.find(NotFoundTitle).text()).toEqual('general:notFound');
    });
  });
});
