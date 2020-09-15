import * as express from 'express';
import Cors from 'cors';
import {NextApiRequest, NextApiResponse} from 'next';

export const cors = Cors({
  methods: ['GET', 'HEAD'],
});

/**
 * Use this function to add Corst to route
 *
 * @param req
 * @param res
 * @param fn
 * @returns {Promise}
 */
export function addCors(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) => express.RequestHandler,
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}
