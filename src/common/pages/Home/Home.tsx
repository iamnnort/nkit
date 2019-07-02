import * as React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Home,
  WhitePapper,
  WhitePapperInner,
  WhitePapperTitle,
  WhitePapperFeatures,
  WhitePapperReleases,
} from './Home.styled';
import { ComponentProps } from './Home.types';
import config from './Home.config';
import Releases from './Releases/Releases';
import Features from './Features/Features';
import { Loader } from '../../components';

const HomeComponent: React.FC<ComponentProps> = ({
  isReleasesLoaded,
  isReleasesLoading,
  releasesError,
  releases,
  loadReleases,
}) => {
  const { t } = useTranslation();

  React.useEffect(() => {
    if (!isReleasesLoaded) {
      loadReleases();
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

export default HomeComponent;
