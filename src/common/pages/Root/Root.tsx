import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { RouteComponentProps } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { GlobalStyle } from '@common/pages/Root/Root.styled';
import seo from '@common/pages/Root/Root.seo';
import Header from '@common/pages/Root/Header/Header';

import { routes } from '@common/routes';

const RootComponent: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <GlobalStyle />
      <Helmet {...seo(t)} />
      <Header />
      {renderRoutes(routes)}
    </React.Fragment>
  );
};

export default RootComponent;
