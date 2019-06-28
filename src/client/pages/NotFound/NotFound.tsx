import * as React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundComponent: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet title={'Страница не найдена'} />
    </React.Fragment>
  );
};

export default {
  component: NotFoundComponent,
};
