import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectIsReleasesLoaded,
  selectIsReleasesLoading,
  selectGetReleasesError,
  selectGetReleases,
} from '@common/store/git/selectors';
import { loadReleaseRequest } from '@common/store/git/actions';
import { loadReleases } from '@common/store/git/sagas';

import {
  Home,
  WhitePapper,
  WhitePapperInner,
  WhitePapperTitle,
  WhitePapperFeatures,
  WhitePapperReleases,
} from '@common/pages/Home/Home.styled';
import config from '@common/pages/Home/Home.config';
import Releases from '@common/pages/Home/Releases/Releases';
import Features from '@common/pages/Home/Features/Features';
import { Loader } from '@common/components';

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
