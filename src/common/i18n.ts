import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';

import locales from '../locales';
import env from './lib/helpers/env';

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: env.isDevelopment(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: locales,
  });

export default i18n;
