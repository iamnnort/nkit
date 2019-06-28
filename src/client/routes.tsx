import { RouteProps } from 'react-router-dom';
import Home from './pages/Home/Home.container';
import NotFound from './pages/NotFound/NotFound';

type RouteInterface = RouteProps & {
  serverFetch?: any;
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
].map((route) => ({ ...route }));

export default routes;
