import { State } from '../index';

export const isReleasesLoaded = (state: State) => state.git.isLoaded;

export const getReleases = (state: State) => state.git.releases;
