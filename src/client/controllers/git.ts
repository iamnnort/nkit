import { gitRequest } from '../lib/request';
import config from '../config';

export const getReleases = () =>
  gitRequest({
    method: config.api.methods.get,
    url: `${config.api.gitEndPoints.getReleases()}`,
  });

const git = {
  getReleases,
};

export default git;
