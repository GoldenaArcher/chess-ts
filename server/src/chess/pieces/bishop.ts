import ChessPiece from './chessPiece';
import { PieceType } from './pieceType';

class Bishop extends ChessPiece {
  public getType(): PieceType {
    return PieceType.Bishop;
  }

  public getLegalMoves(): string[] {
    const res: string[] = [];

    res.push(...this.getLegalMovesOneDirection(1, 1));
    res.push(...this.getLegalMovesOneDirection(1, -1));
    res.push(...this.getLegalMovesOneDirection(-1, -1));
    res.push(...this.getLegalMovesOneDirection(-1, 1));
    return res;
  }
}

export default Bishop;
