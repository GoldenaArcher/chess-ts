import Chessboard from '../../src/chess/chessboard';
import Color from '../../src/chess/color';
import IllegalMoveError from '../../src/chess/errors/illegalMoveError';
import IllegalPositionError from '../../src/chess/errors/illegalPositionError';
import Bishop from '../../src/chess/pieces/bishop';
import ChessPiece from '../../src/chess/pieces/chessPiece';
import King from '../../src/chess/pieces/king';
import Knight from '../../src/chess/pieces/knight';
import Pawn from '../../src/chess/pieces/pawn';
import Queen from '../../src/chess/pieces/queen';
import Rook from '../../src/chess/pieces/rook';
import { isSameColor } from './../../src/util/chessUtil';

const isSamePiece = (piece1: ChessPiece | undefined, piece2: ChessPiece) => {
  return isSameColor(piece1, piece2) && piece1?.getType() === piece2.getType();
};

describe('Test Chessboard functions', () => {
  let chessboard: Chessboard;
  let position: string;
  let piece: ChessPiece;

  beforeEach(() => {
    chessboard = new Chessboard();
    position = 'a2';
    piece = new Bishop(Color.Black, chessboard);
  });

  test('test constructor', () => {
    const board = chessboard.getBoard();
    expect(board.length === 8);
    expect(board[0].length === 8);
  });

  test('test initialization', () => {
    chessboard.initialize();

    const blackRook = new Rook(Color.Black, chessboard);
    const whiteRook = new Rook(Color.White, chessboard);
    const blackKnight = new Knight(Color.Black, chessboard);
    const whiteKnight = new Knight(Color.White, chessboard);
    const blackBishop = new Bishop(Color.Black, chessboard);
    const whiteBishop = new Bishop(Color.White, chessboard);
    const blackQueen = new Queen(Color.Black, chessboard);
    const whiteQueen = new Queen(Color.White, chessboard);
    const blackKing = new King(Color.Black, chessboard);
    const whiteKing = new King(Color.White, chessboard);
    const blackPawn = new Pawn(Color.Black, chessboard);
    const whitePawn = new Pawn(Color.White, chessboard);

    expect(
      isSamePiece(blackRook, chessboard.getPiece('a8') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(blackRook, chessboard.getPiece('h8') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(whiteRook, chessboard.getPiece('a1') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(whiteRook, chessboard.getPiece('h1') as ChessPiece)
    ).toBe(true);

    expect(
      isSamePiece(blackKnight, chessboard.getPiece('b8') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(blackKnight, chessboard.getPiece('g8') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(whiteKnight, chessboard.getPiece('b1') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(whiteKnight, chessboard.getPiece('g1') as ChessPiece)
    ).toBe(true);

    expect(
      isSamePiece(blackBishop, chessboard.getPiece('c8') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(blackBishop, chessboard.getPiece('f8') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(whiteBishop, chessboard.getPiece('c1') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(whiteBishop, chessboard.getPiece('f1') as ChessPiece)
    ).toBe(true);

    expect(
      isSamePiece(blackQueen, chessboard.getPiece('d8') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(whiteQueen, chessboard.getPiece('d1') as ChessPiece)
    ).toBe(true);

    expect(
      isSamePiece(blackKing, chessboard.getPiece('e8') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(whiteKing, chessboard.getPiece('e1') as ChessPiece)
    ).toBe(true);

    expect(
      isSamePiece(blackPawn, chessboard.getPiece('a7') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(blackPawn, chessboard.getPiece('b7') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(blackPawn, chessboard.getPiece('c7') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(blackPawn, chessboard.getPiece('d7') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(blackPawn, chessboard.getPiece('e7') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(blackPawn, chessboard.getPiece('f7') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(blackPawn, chessboard.getPiece('g7') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(blackPawn, chessboard.getPiece('h7') as ChessPiece)
    ).toBe(true);

    expect(
      isSamePiece(whitePawn, chessboard.getPiece('a2') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(whitePawn, chessboard.getPiece('b2') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(whitePawn, chessboard.getPiece('c2') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(whitePawn, chessboard.getPiece('d2') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(whitePawn, chessboard.getPiece('e2') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(whitePawn, chessboard.getPiece('f2') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(whitePawn, chessboard.getPiece('g2') as ChessPiece)
    ).toBe(true);
    expect(
      isSamePiece(whitePawn, chessboard.getPiece('h2') as ChessPiece)
    ).toBe(true);
  });

  describe('test placePiece', () => {
    test('place piece on valid position', () => {
      const res = chessboard.placePiece(position, piece);
      expect(res).toBeTruthy();
      expect(piece.getPosition()).toBe(position);
      expect(chessboard.getPiece(position)).toBe(piece);
    });

    test("place piece on invalid position, position's length is equal to 2", () => {
      position = 'ah2';
      expect(chessboard.placePiece(position, piece)).toBeFalsy;
    });

    test("place piece on invalid position, position's does not match a1-h8", () => {
      position = 'a9';
      expect(chessboard.placePiece(position, piece)).toBeFalsy;
    });
  });

  describe('test getPiece', () => {
    test('get piece on valid position', () => {
      expect(chessboard.getPiece(position)).toBeUndefined();
      chessboard.placePiece(position, piece);
      expect(chessboard.getPiece(position)).toBe(piece);
    });

    test('get piece on invalid position', () => {
      position = 'ah2';
      expect(() => chessboard.getPiece(position)).toThrowError(
        IllegalPositionError
      );
    });
  });

  describe('test move function', () => {
    test('test legal move', () => {
      chessboard.initialize();

      chessboard.move('d2', 'd4');

      expect(chessboard.getPiece('d2')).toBeUndefined();
      expect(
        isSamePiece(
          chessboard.getPiece('d4'),
          new Pawn(Color.White, chessboard)
        )
      ).toBeTruthy();
    });

    test('test illegal move', () => {
      chessboard.initialize();

      expect(() => chessboard.move('d2', 'd5')).toThrow(IllegalMoveError);
    });
  });
});
