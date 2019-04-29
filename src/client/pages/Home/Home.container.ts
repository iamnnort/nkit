import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import HomeComponent from './Home';
import { State, Action } from '../../store';
import { toggleSidebar } from '../../store/ui/actions';
import { isSidebarOpened } from '../../store/ui/selectors';

const mapStateToProps = (state: State) => ({
  isSidebarOpened: isSidebarOpened(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  toggleSidebar: bindActionCreators(toggleSidebar, dispatch),
});

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

const serverFetch = () => (dispatch: Dispatch<Action>) => [bindActionCreators(toggleSidebar, dispatch)()];

export default {
  component: Home,
  serverFetch,
};
