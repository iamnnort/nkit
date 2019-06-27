import styled from '../../../theme/styled-components';

export const Features = styled.section``;

export const FeaturesTitle = styled.div`
  font-size: ${props => props.theme.mediumFontSize};
  font-weight: bold;
`;

export const FeaturesList = styled.div`
  margin-top: ${props => props.theme.smallPadding};
  padding-left: 5px;
`;

export const FeaturesListItem = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;
