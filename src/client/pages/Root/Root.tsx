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
        defaultTitle="react-redux-ssr-ts"
        titleTemplate="react-redux-ssr-ts - %s"
        meta={[
          {
            name: 'description',
            content: `react-redux-ssr-ts`,
          },
          {
            property: 'og:title',
            content: 'AnyComp',
          },
          {
            property: 'og:description',
            content: `react-redux-ssr-ts`,
          },
          {
            property: 'og:url',
            content: `https://react-redux-ssr-ts.com`,
          },
          // {
          //   property: 'og:image',
          //   content: `https://react-redux-ssr-ts.com`,
          // },
          {
            name: 'twitter:title',
            content: 'AnyComp',
          },
          {
            name: 'twitter:description',
            content: `react-redux-ssr-ts`,
          },
          {
            name: 'twitter:url',
            content: `https://react-redux-ssr-ts.com`,
          },
          // {
          //   name: 'twitter:image',
          //   content: `https://react-redux-ssr-ts.com`,
          // },
        ]}
      />
      {renderRoutes(routes)}
    </React.Fragment>
  );
};

export default RootComponent;
