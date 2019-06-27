import axios from 'axios';

import config from '../config';

enum RequestType {
  REQUEST_TYPE_DEFAULT = 'REQUEST_TYPE_DEFAULT',
  REQUEST_TYPE_GIT = 'REQUEST_TYPE_GIT',
}

export const gitRequest = (options: any) => {
  return request(options, RequestType.REQUEST_TYPE_GIT);
};

export const request = (options: any, requestType: RequestType = RequestType.REQUEST_TYPE_DEFAULT) => {
  const onSuccess = (response: any) => {
    return response.data;
  };

  const onError = (error: any) => {
    throw error.response || new Error(error.message);
  };

  const client = axios.create({
    baseURL: requestType === RequestType.REQUEST_TYPE_DEFAULT ? config.api.url : config.api.gitUrl,
  });

  return client({
    ...options,
    headers: {
      Accept: 'application/json',
      ...options.headers,
    },
  })
    .then(onSuccess)
    .catch(onError);
};
