import ChessPiece from './chessPiece';
import { PieceType } from './pieceType';

class Pawn extends ChessPiece {
  public getType(): PieceType {
    return PieceType.Pawn;
  }

  public getLegalMoves(): string[] {
    throw new Error('Method not implemented.');
  }

  public toString(): string {
    throw new Error('Method not implemented.');
  }
}

export default Pawn;
