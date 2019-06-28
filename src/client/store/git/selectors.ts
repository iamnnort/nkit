import { State } from '../index';

export const isReleasesLoaded = (state: State) => state.git.isLoaded;

export const isReleasesLoading = (state: State) => state.git.isLoading;

export const getReleases = (state: State) => state.git.releases;
