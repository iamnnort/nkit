import { RouteConfig } from 'react-router-config';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

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
