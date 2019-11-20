import * as React from 'react';

const MockComponent:React.FC = (props) => {
  return <>{props.children}</>;
}

export function mockComponent(componentName: string, componentProps = {}): React.FC<{ originalComponent: string }> {
  return (props) => {
    return (
      <MockComponent originalComponent={componentName} {...props} {...componentProps}>
        {props.children}
      </MockComponent>
    );
  };
}
