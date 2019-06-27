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
import Releases from './Releases/Releases';
import Features from './Features/Features';

const HomeComponent: React.FC<ComponentProps> = ({ isReleasesLoaded, releases, loadReleases }) => {
  React.useEffect(() => {
    if (!isReleasesLoaded) {
      loadReleases();
    }
  }, []);

  return (
    <Home>
      <WhitePapper>
        <WhitePapperInner>
          <WhitePapperTitle>{'React Starter Kit'}</WhitePapperTitle>
          <WhitePapperFeatures>
            <Features features={config.features} />
          </WhitePapperFeatures>
          <WhitePapperReleases>
            <Releases releases={releases} />
          </WhitePapperReleases>
        </WhitePapperInner>
      </WhitePapper>
    </Home>
  );
};

export default HomeComponent;
