import ChessPiece from './chessPiece';
import { PieceType } from './pieceType';

class King extends ChessPiece {
  private moved = false;

  public getType(): PieceType {
    return PieceType.King;
  }

  // TODO castle
  /**
   * Your king and rook have not moved!
   * Your king is NOT in check!
   * Your king does not pass through check!
   * No pieces between the king and rook!
   * 
   */
  protected castle() {}

  public getLegalMoves(): string[] {
    const res: string[] = [];

    this.getLegalMoveOnePosition(-1, -1, res);
    this.getLegalMoveOnePosition(-1, 0, res);
    this.getLegalMoveOnePosition(-1, 1, res);
    this.getLegalMoveOnePosition(0, 1, res);
    this.getLegalMoveOnePosition(0, -1, res);
    this.getLegalMoveOnePosition(1, -1, res);
    this.getLegalMoveOnePosition(1, 0, res);
    this.getLegalMoveOnePosition(1, 1, res);

    return res;
  }

  public move() {
    this.moved = true;
  }

  public hasMoved() {
    return this.moved;
  }
}

export default King;
