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

  public getLegalMoves(): string[] {
    const res: string[] = [];
    
    this.getLegalMoveOnePosition(-1, -2, res);
    this.getLegalMoveOnePosition(-2, -1, res);
    this.getLegalMoveOnePosition(-1, 2, res);
    this.getLegalMoveOnePosition(-2, 1, res);
    this.getLegalMoveOnePosition(1, 2, res);
    this.getLegalMoveOnePosition(2, 1, res);
    this.getLegalMoveOnePosition(1, -2, res);
    this.getLegalMoveOnePosition(2, -1, res);

    return res;
  }
}

export default Knight;
