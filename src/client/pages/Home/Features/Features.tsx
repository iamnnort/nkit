import * as React from 'react';

import { Features, FeaturesTitle, FeaturesList, FeaturesListItem } from './Features.styled';
import { ComponentProps } from './Features.types';
import { Icon } from '../../../components';

const ReleasesComponent: React.FC<ComponentProps> = ({ features }) => {
  return (
    <Features>
      <FeaturesTitle>{'Features'}</FeaturesTitle>
      <FeaturesList>
        {features.map((feature) => (
          <FeaturesListItem key={feature.value}>
            <Icon type={'checkMark'} />
            {feature.value}
          </FeaturesListItem>
        ))}
      </FeaturesList>
    </Features>
  );
};

export default ReleasesComponent;
