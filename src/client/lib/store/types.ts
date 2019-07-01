export interface CommonStore {
  isInitialLoaded: boolean;
  isLoading: boolean;
  error: string;
}

export enum CommonError {
  FAILED_REQUEST = 'Loading was failed',
}
