import styled from '../../theme/styled-components';

export const Home = styled.section``;

export const WhitePapper = styled.div`
  margin-top: 100px;

  display: flex;
`;

export const WhitePapperInner = styled.div`
  max-width: 500px;

  margin: auto;
  padding: ${(props) => props.theme.mediumPadding};

  background: ${(props) => props.theme.whiteColor};
`;

export const WhitePapperTitle = styled.div`
  font-size: ${(props) => props.theme.largeFontSize};
  font-weight: bold;
  text-align: center;
`;

export const WhitePapperFeatures = styled.div`
  margin-top: ${(props) => props.theme.smallPadding};
`;

export const WhitePapperReleases = styled.div`
  margin-top: ${(props) => props.theme.smallPadding};
`;
