import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { Features, FeaturesSearch, FeaturesTitle, FeaturesList, FeaturesListItem } from './Features.styled';
import { ComponentProps } from './Features.types';
import { Icon } from '../../../components';

const FeaturesComponent: React.FC<ComponentProps> = ({ features }) => {
  const { t } = useTranslation();

  const [searchValue, setSearchValue] = React.useState('re');

  const filteredFeatures = React.useMemo(() => {
    const regex = new RegExp(searchValue, 'i');

    return features.map(feature => {
      return {
        ...feature,
        isSelected: regex.test(feature.value),
      }
    })
  }, [features, searchValue]);

  const handleChangeSearch = React.useCallback((event) => {
    setSearchValue(event.target.value);
  }, [setSearchValue]);

  return (
    <Features>
      <FeaturesTitle>{t('general:features')}</FeaturesTitle>
      <FeaturesSearch value={searchValue} onChange={handleChangeSearch} />
      <FeaturesList>
        {filteredFeatures.map((feature) => (
          <FeaturesListItem key={feature.value} isSelected={feature.isSelected}>
            <Icon type={'checkMark'} />
            {feature.value}
          </FeaturesListItem>
        ))}
      </FeaturesList>
    </Features>
  );
};

export default FeaturesComponent;
