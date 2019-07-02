import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Features, FeaturesTitle, FeaturesList, FeaturesListItem } from './Features.styled';
import { ComponentProps } from './Features.types';
import { Icon } from '../../../components';

const ReleasesComponent: React.FC<ComponentProps> = ({ features }) => {
  const { t } = useTranslation();

  return (
    <Features>
      <FeaturesTitle>{t('general:features')}</FeaturesTitle>
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
