import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';

import locales from '../locales/index';
import config from './config';

export const i18nOptions = {
  debug: false,
  preload: [config.languages.enGb.short, config.languages.ruRu.short],
  fallbackLng: config.languages.enGb.short,
  resources: locales,
};

export default () => {
  if (!i18n.isInitialized) {
    i18n
      .use(initReactI18next)
      .use(languageDetector)
      .init(i18nOptions);
  }
};
