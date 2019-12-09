import { RouteProps } from 'react-router-dom';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

type RouteInterface = RouteProps & {
  preload?: any;
};

const routes: RouteInterface[] = [
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

export default routes;
