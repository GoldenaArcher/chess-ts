import ChessPiece from './chessPiece';
import { PieceType } from './pieceType';

class Knight extends ChessPiece {
  public getType(): PieceType {
    return PieceType.Knight;
  }

  public getLegalMoves(): string[] {
    throw new Error('Method not implemented.');
  }
  public toString(): string {
    throw new Error('Method not implemented.');
  }
}

export default Knight;
