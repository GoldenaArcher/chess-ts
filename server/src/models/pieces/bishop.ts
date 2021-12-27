import { isWhite } from './../../util/chessUtil';
import ChessPiece from './chessPiece';

class Bishop extends ChessPiece {
  public getLegalMoves(): string[] {
    return [];
  }

  public toString(): string {
    return isWhite(this) ? '♗' : '♝';
  }
}

export default Bishop;
