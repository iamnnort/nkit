import * as React from 'react';

import { Loader, LoaderSpin } from './Loader.styled';

export interface Props {
  isLoading: boolean;
}

const LoaderComponent: React.SFC<Props> = ({ isLoading, children }) => (
  <Loader>{isLoading ? <LoaderSpin /> : children}</Loader>
);

export default LoaderComponent;
