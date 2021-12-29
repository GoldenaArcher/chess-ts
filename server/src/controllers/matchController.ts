import { Request, Response } from 'express';
import Match from '../models/matchModel';
import * as factory from './handlerFactory';

// export const createMatch = factory.createOne(Match)
export const createMatch = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
  });
};
