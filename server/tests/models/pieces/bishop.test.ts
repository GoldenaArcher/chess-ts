import { areEqualLegalMoves } from './../../util/pieceTestHelper';
import Chessboard from '../../../src/models/chessboard';
import Color from '../../../src/models/color';
import Bishop from '../../../src/models/pieces/bishop';

describe('Bishop functions test', () => {
  let board: Chessboard;
  let blackBishop: Bishop;
  let whiteBishop: Bishop;

  beforeEach(() => {
    board = new Chessboard();
    blackBishop = new Bishop(Color.Black, board);
    whiteBishop = new Bishop(Color.White, board);
    board.placePiece('d3', blackBishop);
  });

  test("test all bishop's legal moves", () => {
    const legalMoves = [
      'c2',
      'c4',
      'b1',
      'b5',
      'a6',
      'e4',
      'e2',
      'f1',
      'f5',
      'g6',
      'h7',
    ];

    expect(areEqualLegalMoves(legalMoves, blackBishop.getLegalMoves())).toBe(
      true
    );
  });

  test("test bishop's legal moves with same color block", () => {
    const blackBishop2 = new Bishop(Color.Black, board);
    board.placePiece('f5', blackBishop2);

    const legalMoves = ['c2', 'c4', 'b1', 'b5', 'a6', 'e4', 'e2', 'f1'];

    expect(areEqualLegalMoves(legalMoves, blackBishop.getLegalMoves())).toBe(
      true
    );
  });

  test("test bishop's legal moves with different color block", () => {
    board.placePiece('f5', whiteBishop);

    const legalMoves = ['c2', 'c4', 'b1', 'b5', 'a6', 'e4', 'e2', 'f1', 'f5'];

    expect(areEqualLegalMoves(legalMoves, blackBishop.getLegalMoves())).toBe(
      true
    );
  });
});
