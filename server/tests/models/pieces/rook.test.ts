import { areEqualLegalMoves } from './../../util/pieceTestHelper';
import Chessboard from '../../../src/models/chessboard';
import Color from '../../../src/models/color';
import Rook from '../../../src/models/pieces/rook';

describe('Rook legal moves test', () => {
  let board: Chessboard;
  let blackRook: Rook;
  let whiteRook: Rook;

  beforeEach(() => {
    board = new Chessboard();
    blackRook = new Rook(Color.Black, board);
    whiteRook = new Rook(Color.White, board);
    board.placePiece('d3', blackRook);
  });

  test("test all Rook's legal moves", () => {
    const legalMoves = [
      'a3',
      'b3',
      'c3',
      'e3',
      'f3',
      'g3',
      'h3',
      'd1',
      'd2',
      'd4',
      'd5',
      'd6',
      'd7',
      'd8',
    ];

    expect(areEqualLegalMoves(legalMoves, blackRook.getLegalMoves())).toBe(
      true
    );
  });

  test("test Rook's legal moves with same color block", () => {
    const blackRook2 = new Rook(Color.Black, board);
    board.placePiece('d4', blackRook2);

    const legalMoves = ['a3', 'b3', 'c3', 'e3', 'f3', 'g3', 'h3', 'd1', 'd2'];

    expect(areEqualLegalMoves(legalMoves, blackRook.getLegalMoves())).toBe(
      true
    );
  });

  test("test Rook's legal moves with different color block", () => {
    board.placePiece('d4', whiteRook);

    const legalMoves = [
      'a3',
      'b3',
      'c3',
      'e3',
      'f3',
      'g3',
      'h3',
      'd1',
      'd2',
      'd4',
    ];

    expect(areEqualLegalMoves(legalMoves, blackRook.getLegalMoves())).toBe(
      true
    );
  });
});
