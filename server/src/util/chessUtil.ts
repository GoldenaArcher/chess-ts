import Chessboard from '../models/chessboard';
import Color from '../models/color';
import Bishop from '../models/pieces/bishop';
import ChessPiece from '../models/pieces/chessPiece';
import King from '../models/pieces/king';
import Knight from '../models/pieces/knight';
import Pawn from '../models/pieces/pawn';
import { PieceType, PieceObject } from '../models/pieces/pieceType';
import Queen from '../models/pieces/queen';
import Rook from '../models/pieces/rook';
import Player from '../models/player';

export const isWhite = (obj: ChessPiece | Player): boolean =>
  obj.getColor() === Color.White;

export const isSameColor = (
  player: Player | ChessPiece | undefined,
  piece: ChessPiece
): boolean => player?.getColor() === piece.getColor();

export const getIndeciesFromPos = (position: string) => {
  const row = parseInt(position[1]),
    col = position.charCodeAt(0) - 97;

  return { row: 8 - row, col };
};

export const getPosFromIndecies = (row: number, col: number) =>
  `${String.fromCharCode(col + 97)}${8 - row}`;

export const isLegalMove = (position: string) => {
  const pattern = /^([a-h][1-8])$/;

  return pattern.test(position);
};

export const createNewPiece = (
  piece: PieceObject,
  board: Chessboard
): ChessPiece => {
  const { color, type } = piece;
  switch (type) {
    case PieceType.Rook:
      return new Rook(color, board);
    case PieceType.Knight:
      return new Knight(color, board);
    case PieceType.Bishop:
      return new Bishop(color, board);
    case PieceType.Queen:
      return new Queen(color, board);
    case PieceType.King:
      return new King(color, board);
    default:
      return new Pawn(color, board);
  }
};

export const standardOpening = {
  a8: { color: Color.Black, type: PieceType.Rook },
  h8: { color: Color.Black, type: PieceType.Rook },
  a1: { color: Color.White, type: PieceType.Rook },
  h1: { color: Color.White, type: PieceType.Rook },
  b8: { color: Color.Black, type: PieceType.Knight },
  g8: { color: Color.Black, type: PieceType.Knight },
  b1: { color: Color.White, type: PieceType.Knight },
  g1: { color: Color.White, type: PieceType.Knight },
  c8: { color: Color.Black, type: PieceType.Bishop },
  f8: { color: Color.Black, type: PieceType.Bishop },
  c1: { color: Color.White, type: PieceType.Bishop },
  f1: { color: Color.White, type: PieceType.Bishop },
  d8: { color: Color.Black, type: PieceType.Queen },
  d1: { color: Color.White, type: PieceType.Queen },
  e8: { color: Color.Black, type: PieceType.King },
  e1: { color: Color.White, type: PieceType.King },
  a7: { color: Color.Black, type: PieceType.Pawn },
  b7: { color: Color.Black, type: PieceType.Pawn },
  c7: { color: Color.Black, type: PieceType.Pawn },
  d7: { color: Color.Black, type: PieceType.Pawn },
  e7: { color: Color.Black, type: PieceType.Pawn },
  f7: { color: Color.Black, type: PieceType.Pawn },
  g7: { color: Color.Black, type: PieceType.Pawn },
  h7: { color: Color.Black, type: PieceType.Pawn },
  a2: { color: Color.White, type: PieceType.Pawn },
  b2: { color: Color.White, type: PieceType.Pawn },
  c2: { color: Color.White, type: PieceType.Pawn },
  d2: { color: Color.White, type: PieceType.Pawn },
  e2: { color: Color.White, type: PieceType.Pawn },
  f2: { color: Color.White, type: PieceType.Pawn },
  g2: { color: Color.White, type: PieceType.Pawn },
  h2: { color: Color.White, type: PieceType.Pawn },
};

export const getExistedPiece = (
  pos: string,
  board: Chessboard
): boolean | ChessPiece => {
  if (!isLegalMove(pos)) return false;

  const piece = board.getPiece(pos);
  return piece || false;
};
