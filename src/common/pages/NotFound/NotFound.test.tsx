import * as React from 'react';
import { Helmet } from 'react-helmet';
import { shallow, mount, ShallowWrapper } from 'enzyme';

import NotFoundComponent from './NotFound';
import { NotFoundTitle } from './NotFound.styles';

describe('NotFoundComponent', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<NotFoundComponent.component />);
  });

  it('sets document title', () => {
    mount(<NotFoundComponent.component />);
    const helmet = Helmet.peek();
    expect(helmet.title).toEqual('general:notFound');
  });

  describe('NotFoundTitleComponent', () => {
    it('sets title', () => {
      expect(wrapper.find(NotFoundTitle).text()).toEqual('general:notFound');
    });
  });
});
