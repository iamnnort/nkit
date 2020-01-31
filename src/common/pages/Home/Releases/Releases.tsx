import * as React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Releases,
  ReleasesTitle,
  ReleasesList,
  ReleasesListItem,
  ReleasesListItemLink,
} from '@common/pages/Home/Releases/Releases.styled';
import { ComponentProps } from '@common/pages/Home/Releases/Releases.types';
import { Icon } from '@common/components';

const ReleasesComponent: React.FC<ComponentProps> = ({ releases }) => {
  const { t } = useTranslation();

  return (
    <Releases>
      <ReleasesTitle>{t('general:releases')}</ReleasesTitle>
      <ReleasesList>
        {releases.map((release) => (
          <ReleasesListItem key={release.id}>
            <Icon type={'tag'} />
            <ReleasesListItemLink href={release.html_url} target={'_blank'}>
              {`${release.tag_name} (${release.name})`}
            </ReleasesListItemLink>
          </ReleasesListItem>
        ))}
      </ReleasesList>
    </Releases>
  );
};

export default ReleasesComponent;
