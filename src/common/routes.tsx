import { RouteConfig } from 'react-router-config';

import Home from '@common/pages/Home/Home';
import NotFound from '@common/pages/NotFound/NotFound';

export const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    ...Home,
  },
  {
    path: '*',
    ...NotFound,
  },
];
