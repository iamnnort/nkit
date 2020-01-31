import { action } from 'typesafe-actions';
import { ActionTypes, GitRelease } from '@common/store/git/types';

export const loadReleaseRequest = () => action(ActionTypes.LOAD_RELEASES_REQUEST);

export const loadReleaseSuccess = (data: GitRelease[]) => action(ActionTypes.LOAD_RELEASES_SUCCESS, data);

export const loadReleaseFailure = () => action(ActionTypes.LOAD_RELEASES_FAILURE);
