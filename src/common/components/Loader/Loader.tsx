import * as React from 'react';

import { ComponentProps } from '@common/components/Loader/Loader.types';
import { LoaderSpin, LoaderError } from '@common/components/Loader/Loader.styled';

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
