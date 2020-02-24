import { put, takeLatest, call, all, fork } from 'redux-saga/effects';

import { loadReleaseSuccess, loadReleaseFailure } from '@common/store/git/actions';
import { ActionTypes } from '@common/store/git/types';
import controllers from '@common/controllers';

export function* loadReleases() {
  try {
    const releases = yield call(controllers.git.getReleases);
    yield put(loadReleaseSuccess(releases));
  } catch (error) {
    yield put(loadReleaseFailure());
  }
}

export function* watchLoadReleases() {
  yield takeLatest(ActionTypes.LOAD_RELEASES_REQUEST, loadReleases);
}

export default function*() {
  yield all({
    releases: fork(watchLoadReleases),
  });
}
