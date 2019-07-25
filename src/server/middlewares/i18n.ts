import * as express from 'express';
import i18nextMiddleware from 'i18next-express-middleware';
import { i18nOptions } from '../../common/i18n';
const i18next = require('i18next');

i18next.use(i18nextMiddleware.LanguageDetector).init(i18nOptions);

export default (req: express.Request, res: express.Response, next: express.NextFunction) => {
  return i18nextMiddleware.handle(i18next, {
    ignoreRoutes: [],
    removeLngFromUrl: false,
  })(req, res, next);
};
