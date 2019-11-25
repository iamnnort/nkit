import { mockComponent } from './utils';

jest.mock('react-i18next', () => {
  const state = {
    language: 'ru-RU',
  };

  return {
    useTranslation: () => ({
      t: (key: string) => key,
      i18n: {
        language: state.language,
        changeLanguage: (language: string) => {
          state.language = language;
        },
      },
    }),
  };
});
