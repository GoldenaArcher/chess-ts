import { isEmptyArray } from './../util/validationUtil';
import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema(
  {
    players: {
      type: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
      required: [true, 'A match needs players.'],
      validate: {
        validator: (val: any) => !isEmptyArray(val),
        message: 'A match needs at least 1 player to start.',
      },
    },
    ongoing: { type: Boolean, default: true },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Match = mongoose.model('Match', matchSchema);

export default Match;
