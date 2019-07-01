import * as React from 'react';

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
import lang from './Home.lang';
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
  React.useEffect(() => {
    if (!isReleasesLoaded) {
      loadReleases();
    }
  }, []);

  return (
    <Home>
      <WhitePapper>
        <WhitePapperInner>
          <WhitePapperTitle>{lang.title}</WhitePapperTitle>
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
