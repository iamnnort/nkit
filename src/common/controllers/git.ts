import { gitRequest } from '@common/lib/request/request';
import config from '@common/config';

function getReleases() {
  return gitRequest({
    method: config.api.methods.get,
    url: `${config.api.gitEndPoints.getReleases()}`,
  });
}

const git = {
  getReleases,
};

export default git;
