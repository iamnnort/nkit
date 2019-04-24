import { RouteProps } from 'react-router-dom';
import { Store } from 'redux';
import { State, Action } from './store';
import Home from './pages/Home/Home.container';
import NotFound from './pages/NotFound/NotFound';

type RouteInterface = RouteProps & {
  serverFetch?: (store: Store<State, Action>) => Action[];
};

const routes: RouteInterface[] = [
  {
    path: '/',
    exact: true,
    ...Home,
  },
  {
    path: '*',
    component: NotFound,
  },
].map(route => ({ ...route }));

export default routes;
