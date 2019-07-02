import * as express from 'express';
import i18next from 'i18next';

export interface Request extends express.Request {
  i18n: i18next.i18n;
}
