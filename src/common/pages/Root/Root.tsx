import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { RouteComponentProps } from 'react-router';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { GlobalStyle } from './Root.styled';
import seo from './Root.seo';
import Header from './Header/Header';

import { routes } from '../../routes';

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
