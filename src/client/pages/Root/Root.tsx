import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { GlobalStyle } from './Root.styled';

import routes from '../../routes';

const Root = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Helmet defaultTitle="Unknown Build" titleTemplate="Unknown build - %s">
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content="Unknown Build application" />
      </Helmet>
      <Switch>
        {routes.map(route => (
          <Route {...route} />
        ))}
      </Switch>
    </React.Fragment>
  );
};

export default Root;
