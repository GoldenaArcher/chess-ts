import {
  isLegalMove,
  getPosFromIndecies,
  getIndeciesFromPos,
  isSameColor,
} from './../../util/chessUtil';
import { PieceType, PieceObject } from './pieceType';
import Chessboard from '../chessboard';
import Color from '../color';

abstract class ChessPiece {
  private color: Color;
  private position: string;
  protected board: Chessboard;

  constructor(color: Color, board: Chessboard) {
    this.color = color;
    this.position = '';
    this.board = board;
  }

  public getColor(): Color {
    return this.color;
  }

  public setPosition(position: string): void {
    this.position = position;
  }

  public getPosition(): string {
    return this.position;
  }

  protected getLegalMoveOneDirection(
    rowIndent: number,
    colIndent: number
  ): string[] {
    const res = [];
    const { row, col } = getIndeciesFromPos(this.position);
    let currRow = row + rowIndent,
      currCol = col + colIndent;
    let currPos = getPosFromIndecies(currRow, currCol);
    let currentPiece;

    while (isLegalMove(currPos)) {
      currentPiece = this.board.getPiece(currPos);
      if (currentPiece) break;

      res.push(currPos);
      currRow += rowIndent;
      currCol += colIndent;
      currPos = getPosFromIndecies(currRow, currCol);
    }

    if (
      currentPiece?.getColor() &&
      currentPiece?.getColor() !== this.getColor()
    )
      res.push(currPos);

    return res;
  }

  public abstract getLegalMoves(): string[];

  public abstract getType(): PieceType;

  public getObject(): PieceObject {
    return { color: this.color, type: this.getType() };
  }
}

export default ChessPiece;
