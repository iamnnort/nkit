import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from '../../theme/styled-components';

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize};

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    line-height: 1.6;

    color: ${props => props.theme.textColor};

    font-size: ${props => props.theme.textFontSize};
    font-family: ${props => props.theme.textFontFamily};
  }

  input,
  select {
    border-radius: 0;
    appearance: none !important;
  }

  svg {
    fill: ${props => props.theme.textColor};

    display: inherit;

    width: 16px;
    height: 16px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    color: ${props => props.theme.textColor};
  }
`;
