import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';

import { GlobalStyle } from './Root.styled';
import lang from './Root.lang';

import routes from '../../routes';

const RootComponent = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Helmet
        defaultTitle={lang.title}
        titleTemplate={lang.titleTemplate}
        meta={[
          {
            name: 'description',
            content: lang.description,
          },
          {
            property: 'og:title',
            content: lang.description,
          },
          {
            property: 'og:description',
            content: lang.description,
          },
          {
            property: 'og:url',
            content: `https://github.com/nikitapavets/react-ssr-ts-redux`,
          },
          // {
          //   property: 'og:image',
          //   content: `https://github.com/nikitapavets/react-ssr-ts-redux`,
          // },
          {
            name: 'twitter:title',
            content: lang.description,
          },
          {
            name: 'twitter:description',
            content: lang.description,
          },
          {
            name: 'twitter:url',
            content: `https://github.com/nikitapavets/react-ssr-ts-redux`,
          },
          // {
          //   name: 'twitter:image',
          //   content: `https://github.com/nikitapavets/react-ssr-ts-redux`,
          // },
        ]}
      />
      {renderRoutes(routes)}
    </React.Fragment>
  );
};

export default RootComponent;
