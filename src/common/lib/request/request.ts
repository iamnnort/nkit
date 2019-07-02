import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

import { RequestType, SuccessResponse } from './request.types';
import config from '../../config';

export function request(options: AxiosRequestConfig, requestType: RequestType = RequestType.REQUEST_TYPE_DEFAULT) {
  const onSuccess = (response: AxiosResponse<SuccessResponse>) => {
    return response.data;
  };

  const onError = (error: AxiosError) => {
    throw error.response || new Error(error.message);
  };

  const client = axios.create({
    baseURL: makeBaseUrl(requestType),
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
}

export function gitRequest(options: AxiosRequestConfig) {
  return request(options, RequestType.REQUEST_TYPE_GIT);
}

function makeBaseUrl(requestType: RequestType) {
  return requestType === RequestType.REQUEST_TYPE_DEFAULT ? config.api.url : config.api.gitUrl;
}
