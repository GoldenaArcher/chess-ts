import * as matchController from './../controllers/matchController';
import express from 'express';

const router = express.Router();

router.route('/').post(matchController.createMatch);

router.route('/:id').get().delete().patch();

export default router;
