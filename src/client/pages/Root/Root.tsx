import * as React from 'react';

import { GlobalStyle } from './Root.styled';

const Root = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div>Client Root</div>
    </React.Fragment>
  );
};

export default Root;
