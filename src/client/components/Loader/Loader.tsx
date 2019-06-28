import * as React from 'react';

import { ComponentProps } from './Loader.types';
import { Loader, LoaderSpin } from './Loader.styled';

const LoaderComponent: React.FC<ComponentProps> = ({ isLoading, render }) => (
  <Loader>{isLoading ? <LoaderSpin /> : render()}</Loader>
);

export default LoaderComponent;
