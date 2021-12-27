import ChessPiece from './chessPiece';
import { PieceType } from './pieceType';

class King extends ChessPiece {
  public getType(): PieceType {
    return PieceType.King;
  }

  public getLegalMoves(): string[] {
    throw new Error('Method not implemented.');
  }
  public toString(): string {
    throw new Error('Method not implemented.');
  }
}

export default King;
