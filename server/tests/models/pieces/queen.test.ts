import { areEqualLegalMoves } from './../../util/pieceTestHelper';
import Chessboard from '../../../src/models/chessboard';
import Color from '../../../src/models/color';
import Queen from '../../../src/models/pieces/queen';

describe('Queen legal moves test', () => {
  let board: Chessboard;
  let blackQueen: Queen;
  let whiteQueen: Queen;

  beforeEach(() => {
    board = new Chessboard();
    blackQueen = new Queen(Color.Black, board);
    whiteQueen = new Queen(Color.White, board);
    board.placePiece('d3', blackQueen);
  });

  test("test all Queen's legal moves", () => {
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

    expect(areEqualLegalMoves(legalMoves, blackQueen.getLegalMoves())).toBe(
      true
    );
  });

  test("test Queen's legal moves with same color block", () => {
    const blackQueen2 = new Queen(Color.Black, board);
    board.placePiece('d4', blackQueen2);

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

    expect(areEqualLegalMoves(legalMoves, blackQueen.getLegalMoves())).toBe(
      true
    );
  });

  test("test Queen's legal moves with different color block", () => {
    board.placePiece('d4', whiteQueen);

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

    expect(areEqualLegalMoves(legalMoves, blackQueen.getLegalMoves())).toBe(
      true
    );
  });
});
