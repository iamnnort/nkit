import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import NotFoundComponent from '@common/pages/NotFound/NotFound';
import { NotFoundTitle } from '@common/pages/NotFound/NotFound.styled';
import { TestProvider } from '@test/index';

describe('NotFoundComponent', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mount(
      <TestProvider>
        <NotFoundComponent.component />
      </TestProvider>
    );
  });

  describe('NotFoundTitleComponent', () => {
    it('sets title', () => {
      expect(wrapper.find(NotFoundTitle).text()).toEqual('general:notFound');
    });
  });
});
