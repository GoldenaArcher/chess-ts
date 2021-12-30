import morgan from 'morgan';
import { NextFunction, Request, Response } from 'express';

import globalErrorHandler from './controllers/errorController';
import matchRouter from './routes/matchRoutes';
import userRouter from './routes/userRoutes';
import AppError from './util/appError';

const express = require('express');

const app = express();

// middlewares
// read req.body
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/matches', matchRouter);
app.use('/api/users', userRouter);

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

export default app;
