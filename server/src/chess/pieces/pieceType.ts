import Color from '../color';

export enum PieceType {
  Pawn = 'PAWN',
  King = 'KING',
  Queen = 'QUEEN',
  Bishop = 'BISHOP',
  Knight = 'KNIGHT',
  Rook = 'ROOK',
}

export interface PieceObject {
  color: Color;
  type: PieceType;
}
