import * as qs from 'qs';

export const updateQueryParams = (query: string, params: any) => {
  return `?${qs.stringify({
    ...qs.parse(query.replace('?', '')),
    ...params,
  })}`;
};

export const getQueryParams = (query: string) => {
  return qs.parse(query.replace('?', ''));
};

export const getPathName = (query: string) => {
  return query.split('?')[0];
};

export const getLocationSearch = (query: string) => {
  return query.split('?')[1] || '';
};

export function encode(data = {}) {
  return Buffer.from(encodeURIComponent(JSON.stringify(data))).toString('base64');
}

export function decode(data = '') {
  return JSON.parse(decodeURIComponent(Buffer.from(data, 'base64').toString('ascii')));
}
