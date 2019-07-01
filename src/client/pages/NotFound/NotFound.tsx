import * as React from 'react';
import { Helmet } from 'react-helmet';

import lang from './NotFound.lang';

const NotFoundComponent: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet title={lang.title} />
    </React.Fragment>
  );
};

export default {
  component: NotFoundComponent,
};
