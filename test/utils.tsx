import * as React from 'react';
import { ReactWrapper, ShallowWrapper } from 'enzyme';

const MockComponent: React.FC = (props) => {
  return <>{props.children}</>;
};

export function mockComponent(componentName: string, componentProps = {}): React.FC<{ originalComponent: string }> {
  return (props) => {
    return (
      <MockComponent originalComponent={componentName} {...props} {...componentProps}>
        {props.children}
      </MockComponent>
    );
  };
}

export function mockEventListeners(element = document) {
  const proxy = element;
  const eventMap: {
    [key: string]: any;
  } = {};

  const simulate = (event: string, data = {}) => {
    eventMap[event](data);
  };

  proxy.addEventListener = jest.fn((event, cb) => {
    eventMap[event] = cb;
  });

  return { eventMap, simulate };
}

export function findMock(wrapper: ReactWrapper | ShallowWrapper, componentName: string) {
  return wrapper.findWhere(
    (element: ReactWrapper | ShallowWrapper) =>
      element.is(MockComponent) && element.prop('originalComponent') === componentName
  );
}
