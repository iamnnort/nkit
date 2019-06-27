import * as React from 'react';

import { Releases, ReleasesTitle, ReleasesList, ReleasesListItem, ReleasesListItemLink } from './Releases.styled';
import { ComponentProps } from './Releases.types';
import { Icon } from '../../../components';

const ReleasesComponent: React.FC<ComponentProps> = ({ releases }) => {
  return (
    <Releases>
      <ReleasesTitle>{'Releases'}</ReleasesTitle>
      <ReleasesList>
        {releases.map(release => (
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
