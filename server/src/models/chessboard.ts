import {
  isLegalMove,
  getIndeciesFromPos,
  standardOpening,
  createNewPiece,
} from './../util/chessUtil';
import IllegalMoveError from './errors/illegalMoveError';
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

  public initialize(): void {
    for (const [pos, piece] of Object.entries(standardOpening)) {
      this.placePiece(pos, createNewPiece(piece, this));
    }
  }

  /**
   *
   * @param {string} position
   * @param {ChessPiece} piece
   * @returns {boolean}
   */
  public placePiece(position: string, piece: ChessPiece): boolean {
    if (!isLegalMove(position)) return false;

    const { col, row } = getIndeciesFromPos(position);
    this.board[row][col] = piece;
    piece.setPosition(position);
    return true;
  }

  /**
   *
   * @param {string} position
   * @returns {ChessPiece}
   * @throws {IllegalPositionError}
   */
  public getPiece(position: string): ChessPiece {
    if (!isLegalMove(position))
      throw new IllegalPositionError(
        `Position ${position} is not a legal position`
      );

    const { col, row } = getIndeciesFromPos(position);

    return this.board[row][col];
  }

  /**
   *
   * @param {string} fromPos
   * @param {string} toPos
   * @throws {IllegalMoveError}
   */
  public move(fromPos: string, toPos: string): void {
    if (!isLegalMove(fromPos) || !isLegalMove(toPos))
      throw new IllegalMoveError(
        `From ${fromPos} to ${toPos} is not a legal move`
      );
  }
}

export default Chessboard;
