import { Request, Response } from 'express';
import Match from '../models/matchModel';
import * as factory from './handlerFactory';

export const createMatch = factory.createOne(Match);
