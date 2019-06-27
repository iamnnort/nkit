export interface ThemeInterface {
  textColor: string;
  textFontSize: string;
  textFontFamily: string;

  whiteColor: string;

  smallPadding: string;
  mediumPadding: string;

  smallFontSize: string;
  mediumFontSize: string;
  largeFontSize: string;
}

export const theme: ThemeInterface = {
  textColor: '#444',
  textFontSize: '14px',
  textFontFamily: '"Roboto", sans-serif',

  whiteColor: '#fff',

  smallPadding: '15px',
  mediumPadding: '30px',

  smallFontSize: '14px',
  mediumFontSize: '18px',
  largeFontSize: '24px',
};
