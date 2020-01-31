import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';

import locales from '@locales/index';
import env from '@common/lib/helpers/env';
import config from '@common/config';

export const i18nOptions = {
  debug: env.isDevelopment(),
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
