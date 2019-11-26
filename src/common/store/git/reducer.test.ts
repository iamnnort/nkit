import { reducer, initialState } from './reducer';
import { ActionTypes } from './types';
import { loadReleaseRequest, loadReleaseSuccess, loadReleaseFailure } from './actionsCreators';
import { CommonError } from '../../lib/store/types';

describe('git reducer', () => {
  it(`should handle ${ActionTypes.LOAD_RELEASES_REQUEST} action`, () => {
    expect(reducer(initialState, loadReleaseRequest())).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it(`should handle ${ActionTypes.LOAD_RELEASES_SUCCESS} action`, () => {
    expect(
      reducer(
        initialState,
        loadReleaseSuccess([
          {
            id: 1,
            name: 'Release v1',
            tag_name: 'v1',
            html_url: 'https://github.com/nikitapavets/react-ssr-ts-redux/releases/tag/v1',
          },
        ])
      )
    ).toEqual({
      ...initialState,
      isLoading: false,
      isInitialLoaded: true,
      releases: [
        {
          id: 1,
          name: 'Release v1',
          tag_name: 'v1',
          html_url: 'https://github.com/nikitapavets/react-ssr-ts-redux/releases/tag/v1',
        },
      ],
    });
  });

  it(`should handle ${ActionTypes.LOAD_RELEASES_FAILURE} action`, () => {
    expect(reducer(initialState, loadReleaseFailure())).toEqual({
      ...initialState,
      isLoading: false,
      error: CommonError.FAILED_REQUEST,
    });
  });
});
