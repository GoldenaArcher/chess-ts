import { Model } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { catchAsync } from './../util/catchAsync';

export const createOne = (Model: Model<any, any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

export const getOne = (
  Model: Model<any, any>,
  populateOptions: string | undefined = undefined
) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    let query = Model.findById(id);
    if (populateOptions) query = query.populate(populateOptions);

    const doc = await query;

    if (!doc)
      return next(new AppError(`no document found with this id ${id}`, 404));

    res.status(200).json({
      status: 'success',
      data: { data: doc },
    });
  });
