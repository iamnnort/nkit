import styled from '@common/theme/styled-components';

export const Releases = styled.section``;

export const ReleasesTitle = styled.div`
  font-size: ${(props) => props.theme.mediumFontSize};
  font-weight: bold;
`;

export const ReleasesList = styled.div`
  margin-top: ${(props) => props.theme.smallPadding};
  padding-left: 5px;
`;

export const ReleasesListItem = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

export const ReleasesListItemLink = styled.a``;
