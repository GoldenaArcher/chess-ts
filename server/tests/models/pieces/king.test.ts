import Chessboard from '../../../src/chess/chessboard';
import Color from '../../../src/chess/color';
import King from '../../../src/chess/pieces/king';
import { areEqualLegalMoves } from '../../util/pieceTestHelper';

describe('king legal moves test', () => {
  let board: Chessboard;
  let blackKing: King;
  let whiteKing: King;

  beforeEach(() => {
    board = new Chessboard();
    blackKing = new King(Color.Black, board);
    whiteKing = new King(Color.White, board);
    board.placePiece('e1', blackKing);
  });

  test("test all king's legal moves", () => {
    const legalMoves = ['d1', 'f1', 'd2', 'e2', 'f2'];

    expect(areEqualLegalMoves(legalMoves, blackKing.getLegalMoves())).toBe(
      true
    );
  });

  test("test all king's legal moves with same color block", () => {
    const legalMoves = ['d1', 'f1', 'd2', 'e2'];
    const blackKing2 = new King(Color.Black, board);
    board.placePiece('f2', blackKing2);

    expect(areEqualLegalMoves(legalMoves, blackKing.getLegalMoves())).toBe(
      true
    );
  });

  test("test all king's legal moves with different color block", () => {
    const legalMoves = ['d1', 'f1', 'd2', 'e2', 'f2'];
    board.placePiece('f2', whiteKing);

    expect(areEqualLegalMoves(legalMoves, blackKing.getLegalMoves())).toBe(
      true
    );
  });
});
