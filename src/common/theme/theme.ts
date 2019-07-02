export interface ThemeInterface {
  textColor: string;
  textFontSize: string;
  textFontFamily: string;

  brandColor: string;
  whiteColor: string;
  shadowColor: string;

  errorColor: string;

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

  brandColor: '#6B71D9',
  whiteColor: '#fff',
  shadowColor: 'rgba(0, 0, 0, 0.5)',

  errorColor: '#f00',

  smallPadding: '15px',
  mediumPadding: '30px',

  smallFontSize: '14px',
  mediumFontSize: '18px',
  largeFontSize: '24px',
};
