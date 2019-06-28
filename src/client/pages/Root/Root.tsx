import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';

import { GlobalStyle } from './Root.styled';

import routes from '../../routes';

const RootComponent = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Helmet
        defaultTitle='react-ssr-ts-redux'
        titleTemplate='react-ssr-ts-redux - %s'
        meta={[
          {
            name: 'description',
            content: `react-ssr-ts-redux`,
          },
          {
            property: 'og:title',
            content: 'AnyComp',
          },
          {
            property: 'og:description',
            content: `react-ssr-ts-redux`,
          },
          {
            property: 'og:url',
            content: `https://react-ssr-ts-redux.com`,
          },
          // {
          //   property: 'og:image',
          //   content: `https://react-ssr-ts-redux.com`,
          // },
          {
            name: 'twitter:title',
            content: 'AnyComp',
          },
          {
            name: 'twitter:description',
            content: `react-ssr-ts-redux`,
          },
          {
            name: 'twitter:url',
            content: `https://react-ssr-ts-redux.com`,
          },
          // {
          //   name: 'twitter:image',
          //   content: `https://react-ssr-ts-redux.com`,
          // },
        ]}
      />
      {renderRoutes(routes)}
    </React.Fragment>
  );
};

export default RootComponent;
