import { Dispatch } from 'redux';
import { GitRelease } from './types';
import { loadReleaseRequest, loadReleaseSuccess, loadReleaseFailure } from './actionsCreators';
import controllers from '../../controllers';

export const loadReleasesAction = () => (dispatch: Dispatch) => {
  dispatch(loadReleaseRequest());

  return controllers.git
    .getReleases()
    .then((data: GitRelease[]) => dispatch(loadReleaseSuccess(data)))
    .catch(() => dispatch(loadReleaseFailure()));
};
