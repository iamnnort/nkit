import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { loadReleasesAction } from '../actions';
import { ActionTypes } from '../types';
import config from '../../../config';
import metadata from '../../../../../test/metadata';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();
const mock = new MockAdapter(axios);

describe('git actions', () => {
  afterEach(() => {
    mock.restore();
    store.clearActions();
  });

  it('should create LOAD_RELEASES_SUCCESS when fetching git releases has been done', () => {
    const url = config.api.gitUrl + config.api.gitEndPoints.getReleases();
    const response = metadata.releases;

    mock.onGet(url).reply(config.api.statuses.success, response);

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
});
