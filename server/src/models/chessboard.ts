import { isLegalMove, getIndeciesFromPos } from './../util/chessUtil';
import IllegalPositionError from './errors/illegalPositionError';
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

  /**
   *
   * @param {string} position
   * @param {ChessPiece} piece
   * @returns {boolean}
   * @throws {IllegalPositionError}
   */
  public placePiece(position: string, piece: ChessPiece): boolean {
    if (!isLegalMove(position))
      throw new IllegalPositionError(
        `Position ${position} is not a legal position`
      );

    const { col, row } = getIndeciesFromPos(position);
    this.board[row][col] = piece;
    piece.setPosition(position);
    return true;
  }

  /**
   *
   * @param {string} position
   * @returns {ChessPiece}
   */
  public getPiece(position: string): ChessPiece | null {
    const { col, row } = getIndeciesFromPos(position);

    return this.board[row][col];
  }

  /**
   *
   * @param {string} fromPos
   * @param {string} toPos
   * @throws {IllegalMoveError}
   */
  public move(fromPos: string, toPos: string): void {}
}

export default Chessboard;
