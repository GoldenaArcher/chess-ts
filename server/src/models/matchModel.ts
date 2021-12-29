import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema(
  {
    players: {
      type: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
      required: [true, 'A match needs players'],
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
