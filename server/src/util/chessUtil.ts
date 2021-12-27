import Color from '../models/color';
import ChessPiece from '../models/pieces/chessPiece';
import Player from '../models/player';

export const isWhite = (obj: ChessPiece | Player): boolean =>
  obj.getColor() === Color.White;

export const isSameColor = (player: Player, piece: ChessPiece): boolean =>
  player.getColor() === piece.getColor();

export const getIndeciesFromPos = (position: string) => {
  const row = parseInt(position[1]),
    col = position.charCodeAt(0) - 97;

  return { row: 8 - row, col };
};

export const isLegalMove = (position: string) => {
  const pattern = /^([a-h][1-8])$/;

  return pattern.test(position);
};
