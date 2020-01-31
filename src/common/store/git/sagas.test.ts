import { loadReleaseSuccess, loadReleaseFailure } from '@common/store/git/actions';
import { ActionTypes } from '@common/store/git/types';
import { loadReleases } from '@common/store/git/sagas';

describe('git sagas', () => {
  it(`should dispatch ${ActionTypes.LOAD_RELEASES_SUCCESS} if git releases fetching is succeed`, async () => {
    global.apiMock.onGet('https://api.github.com/repos/nikitapavets/react-ssr-ts-redux/releases').replyOnce(200, [
      {
        id: 1,
        name: 'Release v1',
        tag_name: 'v1',
        html_url: 'https://github.com/nikitapavets/react-ssr-ts-redux/releases/tag/v1',
      },
    ]);

    const dispatched = await global.recordSaga(loadReleases);

    expect(dispatched).toContainEqual(
      loadReleaseSuccess([
        {
          id: 1,
          name: 'Release v1',
          tag_name: 'v1',
          html_url: 'https://github.com/nikitapavets/react-ssr-ts-redux/releases/tag/v1',
        },
      ])
    );
  });

  it(`should dispatch ${ActionTypes.LOAD_RELEASES_FAILURE} if git releases fetching is failed`, async () => {
    global.apiMock.onGet('https://api.github.com/repos/nikitapavets/react-ssr-ts-redux/releases').networkErrorOnce();

    const dispatched = await global.recordSaga(loadReleases);

    expect(dispatched).toContainEqual(loadReleaseFailure());
  });
});
