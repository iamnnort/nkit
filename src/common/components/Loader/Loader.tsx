import * as React from 'react';

import { ComponentProps } from './Loader.types';
import { LoaderSpin, LoaderError } from './Loader.styled';

const LoaderComponent: React.FC<ComponentProps> = ({ isLoading, isInitialLoaded, error, render }) => {
  const Content = isInitialLoaded && render();
  const Error = error && <LoaderError>{error}</LoaderError>;

  return isLoading ? (
    <LoaderSpin />
  ) : (
    <React.Fragment>
      {Content}
      {Error}
    </React.Fragment>
  );
};

export default LoaderComponent;
