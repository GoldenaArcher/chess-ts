import ChessPiece from './chessPiece';
import { PieceType } from './pieceType';

class Rook extends ChessPiece {
  private moved = false;

  public getType(): PieceType {
    return PieceType.Rook;
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

    res.push(...this.getLegalMovesOneDirection(0, 1));
    res.push(...this.getLegalMovesOneDirection(0, -1));
    res.push(...this.getLegalMovesOneDirection(-1, 0));
    res.push(...this.getLegalMovesOneDirection(1, 0));
    return res;
  }

  public move() {
    this.moved = true;
  }

  public hasMoved() {
    return this.moved;
  }
}

export default Rook;
