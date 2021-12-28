import ChessPiece from './chessPiece';
import { PieceType } from './pieceType';

class King extends ChessPiece {
  public getType(): PieceType {
    return PieceType.King;
  }

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
}

export default King;
