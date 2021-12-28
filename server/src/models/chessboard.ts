import {
  isLegalMove,
  getIndeciesFromPos,
  standardOpening,
  createNewPiece,
} from './../util/chessUtil';
import IllegalMoveError from './errors/illegalMoveError';
import IllegalPositionError from './errors/illegalPositionError';
import ChessPiece from './pieces/chessPiece';

class Chessboard {
  // board[0][0] starts with a8, board[7][7] ends with h1
  private board: ChessPiece[][] | undefined[][];

  constructor() {
    this.board = Array.from(Array(8), (_) => Array(8));
  }

  public getBoard(): ChessPiece[][] | undefined[][] {
    return this.board;
  }

  public loadBoard(match: object) {
    for (const [pos, piece] of Object.entries(match)) {
      this.placePiece(pos, createNewPiece(piece, this));
    }
  }

  public initialize(): void {
    this.loadBoard(standardOpening);
  }

  /**
   *
   * @param {string} position
   * @param {ChessPiece} piece
   * @returns {boolean}
   */
  public placePiece(position: string, piece: ChessPiece | undefined): boolean {
    if (!isLegalMove(position)) return false;

    const { col, row } = getIndeciesFromPos(position);
    this.board[row][col] = piece;
    piece?.setPosition(position);
    return true;
  }

  /**
   *
   * @param {string} position
   * @returns {ChessPiece}
   * @throws {IllegalPositionError}
   */
  public getPiece(position: string): ChessPiece | undefined {
    if (!isLegalMove(position))
      throw new IllegalPositionError(
        `Position ${position} is not a legal position`
      );

    const { col, row } = getIndeciesFromPos(position);

    return this.board[row][col];
  }

  // todo
  // move castle pieces
  private castleMove() {}

  // todo
  // en passant
  private promote() {}

  /**
   *
   * @param {string} fromPos
   * @param {string} toPos
   * @throws {IllegalMoveError}
   */
  public move(fromPos: string, toPos: string): void {
    const errMsg = `From ${fromPos} to ${toPos} is not a legal move`;

    if (!isLegalMove(fromPos) || !isLegalMove(toPos))
      throw new IllegalMoveError(errMsg);

    const fromPiece = this.getPiece(fromPos);

    if (!fromPiece) throw new IllegalMoveError(errMsg);

    if (!fromPiece.getLegalMoves().includes(toPos))
      throw new IllegalMoveError(errMsg);

    this.placePiece(fromPos, undefined);
    this.placePiece(toPos, fromPiece);
  }
}

export default Chessboard;
