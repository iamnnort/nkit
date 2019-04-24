import * as React from 'react';
import { Helmet } from 'react-helmet';

import { NotFound } from './NotFound.styled';

const NotFoundComponent = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>NotFound</title>
      </Helmet>
      <NotFound>NotFound</NotFound>
    </React.Fragment>
  );
};

export default NotFoundComponent;
