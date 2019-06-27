import { Dispatch } from 'redux';
import { GitRelease } from './types';
import { loadReleaseRequest, loadReleaseSuccess } from './actionsCreators';
import controllers from '../../controllers';

export const loadReleases = () => (dispatch: Dispatch) => {
  dispatch(loadReleaseRequest());

  return controllers.git.getReleases().then((data: GitRelease[]) => dispatch(loadReleaseSuccess(data)));
};
