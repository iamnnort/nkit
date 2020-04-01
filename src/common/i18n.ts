import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';

import locales from '../locales';
import config from './config';

const i18nOptions = {
  debug: false,
  preload: [config.languages.ruRu.short],
  fallbackLng: config.languages.ruRu.short,
  resources: locales,
};

export default {
  init: () => {
    i18n
      .use(initReactI18next)
      .use(languageDetector)
      .init(i18nOptions);
  },
  getOptions: () => {
    return i18nOptions;
  },
};
