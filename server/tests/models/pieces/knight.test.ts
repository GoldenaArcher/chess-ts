import Chessboard from '../../../src/models/chessboard';
import Color from '../../../src/models/color';
import Knight from '../../../src/models/pieces/knight';
import { areEqualLegalMoves } from '../../util/pieceTestHelper';

describe('Knight legal moves test', () => {
  let board: Chessboard;
  let blackKnight: Knight;
  let whiteKnight: Knight;

  beforeEach(() => {
    board = new Chessboard();
    blackKnight = new Knight(Color.Black, board);
    whiteKnight = new Knight(Color.White, board);
    board.placePiece('b3', blackKnight);
  });

  test("test all knight's legal moves", () => {
    const legalMoves = ['a5', 'a1', 'c5', 'c1', 'd4', 'd2'];

    expect(areEqualLegalMoves(legalMoves, blackKnight.getLegalMoves())).toBe(
      true
    );
  });

  test("test all knight's legal moves with same color block", () => {
    const blackKnight2 = new Knight(Color.Black, board);
    board.placePiece('d2', blackKnight2);

    const legalMoves = ['a5', 'a1', 'c5', 'c1', 'd4'];

    expect(areEqualLegalMoves(legalMoves, blackKnight.getLegalMoves())).toBe(
      true
    );
  });

  test("test all knight's legal moves with different color block", () => {
    const legalMoves = ['a5', 'a1', 'c5', 'c1', 'd4', 'd2'];
    board.placePiece('d2', whiteKnight);

    expect(areEqualLegalMoves(legalMoves, blackKnight.getLegalMoves())).toBe(
      true
    );
  });
});
