import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const NotFoundComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Helmet title={t('general:notFound')} />
    </React.Fragment>
  );
};

export default {
  component: NotFoundComponent,
};
