import User from '../models/userModel';
import * as factory from './handlerFactory';

export const createUser = factory.createOne(User);

export const getUser = factory.getOne(User);
