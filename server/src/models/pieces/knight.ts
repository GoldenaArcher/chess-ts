import {
  getIndeciesFromPos,
  getPosFromIndecies,
  isLegalMove,
  isSameColor,
} from './../../util/chessUtil';
import ChessPiece from './chessPiece';
import { PieceType } from './pieceType';

class Knight extends ChessPiece {
  public getType(): PieceType {
    return PieceType.Knight;
  }

  private isLegalKnightMove(
    rowIndex: number,
    colIndex: number,
    res: string[]
  ): void {
    const { row, col } = getIndeciesFromPos(this.position);
    const currPosition = getPosFromIndecies(row + rowIndex, col + colIndex);

    if (isLegalMove(currPosition)) {
      const currPiece = this.board.getPiece(currPosition);

      if (!currPiece || !isSameColor(currPiece, this)) {
        res.push(currPosition);
      }
    }
  }

  public getLegalMoves(): string[] {
    const res: string[] = [];
    this.isLegalKnightMove(-1, -2, res);
    this.isLegalKnightMove(-2, -1, res);
    this.isLegalKnightMove(-1, 2, res);
    this.isLegalKnightMove(-2, 1, res);
    this.isLegalKnightMove(1, 2, res);
    this.isLegalKnightMove(2, 1, res);
    this.isLegalKnightMove(1, -2, res);
    this.isLegalKnightMove(2, -1, res);

    return res;
  }
}

export default Knight;
