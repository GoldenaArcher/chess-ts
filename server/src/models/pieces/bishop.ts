import { isWhite } from './../../util/chessUtil';
import ChessPiece from './chessPiece';
import { PieceType } from './pieceType';

class Bishop extends ChessPiece {
  public getType(): PieceType {
    return PieceType.Bishop;
  }

  public getLegalMoves(): string[] {
    return [];
  }

  public toString(): string {
    return isWhite(this) ? '♗' : '♝';
  }
}

export default Bishop;
