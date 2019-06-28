import { GitRelease } from '../../store/git/types';

export interface StateProps {
  isReleasesLoaded: boolean;
  isReleasesLoading: boolean;
  releases: GitRelease[];
}

export interface DispatchProps {
  loadReleases: () => void;
}

export type ComponentProps = StateProps & DispatchProps;
