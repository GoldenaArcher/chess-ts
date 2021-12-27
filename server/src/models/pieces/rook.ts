import ChessPiece from './chessPiece';
import { PieceType } from './pieceType';

class Rook extends ChessPiece {
  public getType(): PieceType {
    return PieceType.Rook;
  }

  public getLegalMoves(): string[] {
    throw new Error('Method not implemented.');
  }
  public toString(): string {
    throw new Error('Method not implemented.');
  }
}

export default Rook;
