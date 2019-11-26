import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { loadReleasesAction } from './actions';
import { ActionTypes } from './types';
import config from '../../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();
const mockRequest = new MockAdapter(axios);

describe('git actions', () => {
  beforeEach(() => {
    mockRequest.reset();
    store.clearActions();
  });

  it(`should create ${ActionTypes.LOAD_RELEASES_SUCCESS} action when fetching git releases has been done`, () => {
    const url = config.api.gitUrl + config.api.gitEndPoints.getReleases();
    const response = [
      {
        html_url: 'https://github.com/nikitapavets/react-ssr-ts-redux/releases/tag/v1',
        id: 1,
        name: 'Release v1',
        tag_name: 'v1',
      },
    ];

    mockRequest.onGet(url).replyOnce(config.api.statuses.success, response);

    const expectedActions = [
      { type: ActionTypes.LOAD_RELEASES_REQUEST },
      {
        type: ActionTypes.LOAD_RELEASES_SUCCESS,
        payload: response,
      },
    ];

    return loadReleasesAction()(store.dispatch).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it(`should create ${ActionTypes.LOAD_RELEASES_FAILURE} action when fetching git releases has not been done`, () => {
    const url = config.api.gitUrl + config.api.gitEndPoints.getReleases();

    mockRequest.onGet(url).networkErrorOnce();

    const expectedActions = [{ type: ActionTypes.LOAD_RELEASES_REQUEST }, { type: ActionTypes.LOAD_RELEASES_FAILURE }];

    return loadReleasesAction()(store.dispatch).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
