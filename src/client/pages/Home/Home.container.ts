import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import HomeComponent from './Home';
import { StateProps, DispatchProps } from './Home.types';
import { State } from '../../store';
import { loadReleases } from '../../store/git/actions';
import { isReleasesLoaded, isReleasesLoading, getReleases } from '../../store/git/selectors';

const mapStateToProps = (state: State): StateProps => ({
  isReleasesLoaded: isReleasesLoaded(state),
  isReleasesLoading: isReleasesLoading(state),
  releases: getReleases(state),
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  loadReleases: bindActionCreators(loadReleases, dispatch),
});

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);

const serverFetch = () => (dispatch: Dispatch) => [bindActionCreators(loadReleases, dispatch)()];

export default {
  component: Home,
  serverFetch,
};
