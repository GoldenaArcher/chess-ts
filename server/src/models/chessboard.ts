import { getIndeciesFromPos } from './../util/chessUtil';
import ChessPiece from './pieces/chessPiece';
import Player from './player';

class Chessboard {
  // board[0][0] starts with a8, board[7][7] ends with h1
  private board: ChessPiece[][];
  //   private playerWhite: Player;
  //   private playerBlack: Player;

  constructor() {
    this.board = Array.from(Array(8), (_) => Array(8));
  }

  public getBoard(): ChessPiece[][] {
    return this.board;
  }

  public initialize(): void {}

  public placePiece(position: string, piece: ChessPiece): boolean {
    const { col, row } = getIndeciesFromPos(position);
    this.board[row][col] = piece;
    piece.setPosition(position);
    return true;
  }

  public getPiece(position: string): ChessPiece | null {
    return null;
  }

  public move(): void {}
}

export default Chessboard;
