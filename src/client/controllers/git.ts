import { gitRequest } from '../lib/request/request';
import config from '../config';

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
