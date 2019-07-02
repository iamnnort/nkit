import * as express from 'express';
import i18nextMiddleware from 'i18next-express-middleware';
import locales from '../../locales';
import env from '../../common/lib/helpers/env';
const i18next = require('i18next');

i18next.use(i18nextMiddleware.LanguageDetector).init({
  preload: ['en', 'ru'],
  debug: env.isDevelopment(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: locales,
});

export default (req: express.Request, res: express.Response, next: express.NextFunction) => {
  return i18nextMiddleware.handle(i18next, {
    ignoreRoutes: [],
    removeLngFromUrl: false,
  })(req, res, next);
};
