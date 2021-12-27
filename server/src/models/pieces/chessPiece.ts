import Chessboard from '../chessboard';
import Color from '../color';

abstract class ChessPiece {
  private color: Color;
  private position: string;
  private board: Chessboard;

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

  public abstract getLegalMoves(): string[];

  public abstract toString(): string;
}

export default ChessPiece;
