import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsReleasesLoaded,
  selectIsReleasesLoading,
  selectGetReleasesError,
  selectGetReleases,
} from '../../store/git/selectors';
import { loadReleaseRequest } from '../../store/git/actions';
import { loadReleases } from '../../store/git/sagas';

import {
  Home,
  WhitePapper,
  WhitePapperInner,
  WhitePapperTitle,
  WhitePapperFeatures,
  WhitePapperReleases,
} from './Home.styled';
import config from './Home.config';
import Releases from './Releases/Releases';
import Features from './Features/Features';
import { Loader } from '../../components';

const HomeComponent: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const isReleasesLoaded = useSelector(selectIsReleasesLoaded);
  const isReleasesLoading = useSelector(selectIsReleasesLoading);
  const releasesError = useSelector(selectGetReleasesError);
  const releases = useSelector(selectGetReleases);

  React.useEffect(() => {
    if (!isReleasesLoaded) {
      dispatch(loadReleaseRequest());
    }
  }, []);

  return (
    <Home>
      <WhitePapper>
        <WhitePapperInner>
          <WhitePapperTitle>{t('general:appTitle')}</WhitePapperTitle>
          <WhitePapperFeatures>
            <Features features={config.features} />
          </WhitePapperFeatures>
          <Loader
            isLoading={isReleasesLoading}
            isInitialLoaded={isReleasesLoaded}
            error={releasesError}
            render={() => (
              <WhitePapperReleases>
                <Releases releases={releases} />
              </WhitePapperReleases>
            )}
          />
        </WhitePapperInner>
      </WhitePapper>
    </Home>
  );
};

const preload = () => {
  return [loadReleases];
};

export default {
  component: HomeComponent,
  preload,
};
