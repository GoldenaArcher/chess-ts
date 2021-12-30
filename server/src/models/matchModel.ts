import { isEmptyArray } from './../util/validationUtil';
import mongoose from 'mongoose';
import Color from '../chess/color';

const matchSchema = new mongoose.Schema(
  {
    players: {
      type: [
        {
          userId: { type: mongoose.Types.ObjectId, ref: 'User' },
          color: {
            type: String,
            enum: Color,
            required: [true, 'A player needs to have a color'],
          },
        },
      ],
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
