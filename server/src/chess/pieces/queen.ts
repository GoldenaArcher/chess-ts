import ChessPiece from './chessPiece';
import { PieceType } from './pieceType';

class Queen extends ChessPiece {
  public getType(): PieceType {
    return PieceType.Queen;
  }

  public getLegalMoves(): string[] {
    const res: string[] = [];

    res.push(...this.getLegalMovesOneDirection(0, 1));
    res.push(...this.getLegalMovesOneDirection(0, -1));
    res.push(...this.getLegalMovesOneDirection(-1, 0));
    res.push(...this.getLegalMovesOneDirection(1, 0));

    res.push(...this.getLegalMovesOneDirection(1, 1));
    res.push(...this.getLegalMovesOneDirection(1, -1));
    res.push(...this.getLegalMovesOneDirection(-1, -1));
    res.push(...this.getLegalMovesOneDirection(-1, 1));

    return res;
  }
}

export default Queen;
