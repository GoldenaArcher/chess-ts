import ChessPiece from './chessPiece';
import { PieceType } from './pieceType';

class Queen extends ChessPiece {
  public getType(): PieceType {
    return PieceType.Queen;
  }
  
  public getLegalMoves(): string[] {
    throw new Error('Method not implemented.');
  }
  public toString(): string {
    throw new Error('Method not implemented.');
  }
}

export default Queen;
