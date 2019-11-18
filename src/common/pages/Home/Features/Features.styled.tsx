import styled, { icon } from '../../../theme/styled-components';

export const Features = styled.section``;

export const FeaturesTitle = styled.div`
  font-size: ${(props) => props.theme.mediumFontSize};
  font-weight: bold;
`;

export const FeaturesSearch = styled.input`
  width: 100%;

  margin-top: ${(props) => props.theme.smallPadding};
  padding: 5px;
  border: 1px solid ${(props) => props.theme.textColor};
`;

export const FeaturesList = styled.div`
  margin-top: ${(props) => props.theme.smallPadding};
  padding-left: 5px;
`;

export const FeaturesListItem = styled('div')<{
  isSelected: boolean;
}>`
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }

  ${(props) => props.isSelected && icon({ color: props.theme.brandColor })}
`;
