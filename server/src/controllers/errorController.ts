import { NextFunction, Request, Response } from 'express';
import { CastError, Error as MongooseError } from 'mongoose';
import AppError from '../util/appError';

interface IError {
  statusCode: number;
  status: string;
  stack: string | undefined;
  message: string;
}

const sendErrorDev = (err: IError, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    statck: err.stack,
  });
};

const sendErrorProduction = (err: AppError | IError, res: Response) => {
  let status, message, statusCode;
  if (err instanceof AppError) {
    status = err.getStatus();
    message = err.getMessage();
    statusCode = err.getStatusCode();
  } else {
    status = 'error';
    message = 'something went wrong';
    statusCode = 500;
  }

  res.status(statusCode).json({
    status,
    message,
  });
};

const handleCastErrorDB = (err: CastError) => {
  const { path, value } = err;
  const message = `Invalid ${path}: ${value}`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err: any) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/) || '';
  const message = `Duplicate fielde value: ${value[0]}. Please use another value`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = (err: any) => {
  // message will display err msg from cutom validator
  let message = err.message;

  // err.erros are the validation errors from mongoose
  if (err.errors) {
    const errors = Object.values(err?.errors).map((el: any) => el.message);
    message = `Invalid input data. ${errors.join('. ')}.`;
  }

  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError('Invalid token, please login again', 401);

const handleJWTExpiredToken = () =>
  new AppError('Your session has expired, please login again.', 401);

const globalErrorHandler = (
  err: Error | AppError | MongooseError | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error: IError | AppError = {
    statusCode: err instanceof AppError ? err.getStatusCode() : 500,
    status: err instanceof AppError ? err.getStatus() : 'error',
    stack: err.stack,
    message: err.message,
  };

  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'development') {
    sendErrorDev(error, res);
  } else if (NODE_ENV === 'production') {
    if (err.name === 'CastError') error = handleCastErrorDB(err as CastError);
    if (err.code === 11000) error = handleDuplicateFieldsDB(error);
    if (err.name === 'ValidationError') error = handleValidationErrorDB(error);
    if (err.name === 'JsonWebTokenError') error = handleJWTError();
    if (err.name === 'TokenExpiredError') error = handleJWTExpiredToken();
    sendErrorProduction(error, res);
  }
};

export default globalErrorHandler;
