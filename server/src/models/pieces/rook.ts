import ChessPiece from './chessPiece';
import { PieceType } from './pieceType';

class Rook extends ChessPiece {
  private moved = false;

  public getType(): PieceType {
    return PieceType.Rook;
  }

  public getLegalMoves(): string[] {
    throw new Error('Method not implemented.');
  }

  public move() {
    this.moved = true;
  }

  public hasMoved() {
    return this.moved;
  }
}

export default Rook;
