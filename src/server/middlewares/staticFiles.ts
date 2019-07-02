import * as express from 'express';

export default (req: express.Request, res: express.Response, next: express.NextFunction) => {
  return express.static('build')(req, res, next);
};
