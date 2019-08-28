import metadata from '../../../../../test/metadata';
import { reducer, initialState } from '../reducer';
import { ActionTypes } from '../types';
import { loadReleaseRequest, loadReleaseSuccess, loadReleaseFailure } from '../actionsCreators';
import { CommonError } from '../../../lib/store/types';

describe('git reducer', () => {
  it(`should handle ${ActionTypes.LOAD_RELEASES_REQUEST}`, () => {
    expect(reducer(initialState, loadReleaseRequest())).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it(`should handle ${ActionTypes.LOAD_RELEASES_SUCCESS}`, () => {
    expect(reducer(initialState, loadReleaseSuccess(metadata.releases))).toEqual({
      ...initialState,
      isLoading: false,
      isInitialLoaded: true,
      releases: metadata.releases,
    });
  });

  it(`should handle ${ActionTypes.LOAD_RELEASES_FAILURE}`, () => {
    expect(reducer(initialState, loadReleaseFailure())).toEqual({
      ...initialState,
      isLoading: false,
      error: CommonError.FAILED_REQUEST,
    });
  });
});
