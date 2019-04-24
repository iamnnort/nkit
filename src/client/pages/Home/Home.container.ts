import { connect } from 'react-redux';
import { Store, Dispatch } from 'redux';
import { State, Action } from '../../store';
import HomeComponent from './Home';
import { toggleSidebar } from '../../store/ui/actions';
import { isSidebarOpened } from '../../store/ui/selectors';

const mapStateToProps = (state: State) => ({
  isSidebarOpened: isSidebarOpened(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  toggleSidebar: dispatch(toggleSidebar()),
});

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

const serverFetch = ({ dispatch }: Store<State, Action>) => [dispatch(toggleSidebar())];

export default {
  component: Home,
  serverFetch,
};
