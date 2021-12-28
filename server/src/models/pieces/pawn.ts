import {
  isWhite,
  getPosFromIndecies,
  getIndeciesFromPos,
  isLegalMove,
  isSameColor,
  getExistedPiece,
} from './../../util/chessUtil';
import ChessPiece from './chessPiece';
import { PieceType } from './pieceType';

class Pawn extends ChessPiece {
  public getType(): PieceType {
    return PieceType.Pawn;
  }

  private isInitialPosition(): boolean {
    if (isWhite(this) && this.position[1] === '2') return true;

    if (!isWhite(this) && this.position[1] === '7') return true;

    return false;
  }

  private getPawnLegalMoveOnePosition(colIndex: number, res: string[]) {
    let { row, col } = getIndeciesFromPos(this.position);
    row = isWhite(this) ? row - colIndex : row + colIndex;
    const currPos = getPosFromIndecies(row, col);

    if (isLegalMove(currPos) && !this.board.getPiece(currPos)) {
      res.push(currPos);
    }
  }

  private getLegalCaptureMove(res: string[]) {
    let { row, col } = getIndeciesFromPos(this.position);
    row = isWhite(this) ? row - 1 : row + 1;

    const diagnalCapturePos1 = getPosFromIndecies(row, col + 1);
    const diagnalCapturePos2 = getPosFromIndecies(row, col - 1);
    const diagnalCapturePiece1 = getExistedPiece(
      diagnalCapturePos1,
      this.board
    );
    const diagnalCapturePiece2 = getExistedPiece(
      diagnalCapturePos2,
      this.board
    );

    if (
      diagnalCapturePiece1 &&
      !isSameColor(diagnalCapturePiece1 as ChessPiece, this)
    ) {
      res.push(diagnalCapturePos1);
    }

    if (
      diagnalCapturePiece2 &&
      !isSameColor(diagnalCapturePiece2 as ChessPiece, this)
    ) {
      res.push(diagnalCapturePos2);
    }
  }

  private legalPawnMove(res: string[]): void {
    this.getPawnLegalMoveOnePosition(1, res);
    if (this.isInitialPosition()) {
      this.getPawnLegalMoveOnePosition(2, res);
    }
    this.getLegalCaptureMove(res);
  }

  public getLegalMoves(): string[] {
    const res: string[] = [];
    this.legalPawnMove(res);

    return res;
  }
}

export default Pawn;
