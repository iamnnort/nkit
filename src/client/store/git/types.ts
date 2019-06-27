export enum ActionTypes {
  LOAD_RELEASES_REQUEST = '@@git/LOAD_RELEASES_REQUEST',
  LOAD_RELEASES_SUCCESS = '@@git/LOAD_RELEASES_SUCCESS',
  LOAD_RELEASES_FAILURE = '@@git/LOAD_RELEASES_FAILURE',
}

export interface Git {
  isLoaded: boolean;
  isLoading: boolean;
  releases: GitRelease[];
}

export interface GitRelease {
  id: number;
  name: string;
  tag_name: string;
  html_url: string;
}
