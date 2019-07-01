import { State } from '../index';

export const isReleasesLoaded = (state: State) => state.git.isInitialLoaded;

export const isReleasesLoading = (state: State) => state.git.isLoading;

export const getReleasesError = (state: State) => state.git.error;

export const getReleases = (state: State) => state.git.releases;
