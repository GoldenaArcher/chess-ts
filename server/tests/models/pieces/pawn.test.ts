import Chessboard from '../../../src/models/chessboard';
import Color from '../../../src/models/color';
import Pawn from '../../../src/models/pieces/pawn';
import { areEqualLegalMoves } from '../../util/pieceTestHelper';

describe('Pawn legal moves test', () => {
  let board: Chessboard;
  let blackInitialPawn: Pawn;
  let whiteInitialPawn: Pawn;
  let blackPawn: Pawn;
  let whitePawn: Pawn;

  beforeEach(() => {
    board = new Chessboard();
    blackInitialPawn = new Pawn(Color.Black, board);
    blackPawn = new Pawn(Color.Black, board);
    whiteInitialPawn = new Pawn(Color.White, board);
    whitePawn = new Pawn(Color.White, board);

    board.placePiece('f7', blackInitialPawn);
    board.placePiece('f2', whiteInitialPawn);
    board.placePiece('c6', blackPawn);
    board.placePiece('e3', whitePawn);
  });

  test("test Black Pawn's initial legal moves", () => {
    const legalMoves = ['f6', 'f5'];

    expect(
      areEqualLegalMoves(legalMoves, blackInitialPawn.getLegalMoves())
    ).toBe(true);
  });

  test("test White Pawn's initial legal moves", () => {
    const legalMoves = ['f3', 'f4'];

    expect(
      areEqualLegalMoves(legalMoves, whiteInitialPawn.getLegalMoves())
    ).toBe(true);
  });

  test("test Black Pawn's non-initial legal moves", () => {
    const legalMoves = ['c5'];

    expect(areEqualLegalMoves(legalMoves, blackPawn.getLegalMoves())).toBe(
      true
    );
  });

  test("test White Pawn's non-initial legal moves", () => {
    const legalMoves = ['e4'];

    expect(areEqualLegalMoves(legalMoves, whitePawn.getLegalMoves())).toBe(
      true
    );
  });

  test("test Black Pawn's legal moves with different color block", () => {
    const legalMoves = ['f6', 'f5', 'e6'];
    const whitePawn2 = new Pawn(Color.White, board);
    board.placePiece('e6', whitePawn2);

    expect(
      areEqualLegalMoves(legalMoves, blackInitialPawn.getLegalMoves())
    ).toBe(true);
  });

  test("test White Pawn's legal moves with different color block", () => {
    const legalMoves = ['e4', 'd4'];
    const blackPawn2 = new Pawn(Color.Black, board);
    board.placePiece('d4', blackPawn2);

    expect(areEqualLegalMoves(legalMoves, whitePawn.getLegalMoves())).toBe(
      true
    );
  });
});
