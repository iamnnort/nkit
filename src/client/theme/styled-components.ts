/* eslint-disable @typescript-eslint/no-object-literal-type-assertion, @typescript-eslint/no-explicit-any */
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { ThemeInterface } from './theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

const sizes = {
  mobile: 321,
  tablet: 426,
  desktop: 769,
  large: 1441,
  xlarge: 1921,
};

const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce(
  (acc, label) => {
    acc[label] = (first: any, ...interpolations: any[]) => css`
      @media (min-width: ${sizes[label]}px) {
        ${css(first, ...interpolations)}
      }
    `;

    return acc;
  },
  {} as { [key in keyof typeof sizes]: styledComponents.ThemedCssFunction<ThemeInterface> }
);

export { css, createGlobalStyle, keyframes, ThemeProvider, media, sizes };
export default styled;
