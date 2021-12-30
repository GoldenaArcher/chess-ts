import { Model } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { catchAsync } from './../util/catchAsync';
import AppError from '../util/appError';
import ApiFeatures from '../util/apiFeatures';

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

export const getAll = (Model: Model<any, any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const features = new ApiFeatures(Model.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const doc = await features.getQuery();

    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: { data: doc },
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

export const updateOne = (Model: Model<any, any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const doc = await Model.findOneAndUpdate({ id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError(`No document found with the ID ${id}`, 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

export const deleteOne = (Model: Model<any, any>) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const doc = await Model.findByIdAndDelete(id);

    if (!doc) {
      return next(new AppError(`No document found with the ID ${id}`, 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  });
