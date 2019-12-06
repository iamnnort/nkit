import { State } from '../reducer';

export const selectIsReleasesLoaded = (state: State) => state.git.isInitialLoaded;

export const selectIsReleasesLoading = (state: State) => state.git.isLoading;

export const selectGetReleasesError = (state: State) => state.git.error;

export const selectGetReleases = (state: State) => state.git.releases;
