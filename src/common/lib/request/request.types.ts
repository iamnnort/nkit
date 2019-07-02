import { GitRelease } from '../../store/git/types';

export enum RequestType {
  REQUEST_TYPE_DEFAULT = 'REQUEST_TYPE_DEFAULT',
  REQUEST_TYPE_GIT = 'REQUEST_TYPE_GIT',
}

export type SuccessResponse = GitRelease[];
