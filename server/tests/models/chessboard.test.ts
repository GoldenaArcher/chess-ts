import { isSameColor } from './../../src/util/chessUtil';
import Chessboard from '../../src/models/chessboard';
import Color from '../../src/models/color';
import Bishop from '../../src/models/pieces/bishop';
import ChessPiece from '../../src/models/pieces/chessPiece';
import IllegalPositionError from '../../src/models/errors/illegalPositionError';
import Rook from '../../src/models/pieces/rook';
import Knight from '../../src/models/pieces/knight';
import Queen from '../../src/models/pieces/queen';
import King from '../../src/models/pieces/king';
import Pawn from '../../src/models/pieces/pawn';

const isSamePiece = (piece1: ChessPiece, piece2: ChessPiece) => {
  return isSameColor(piece1, piece2) && piece1.getType() === piece2.getType();
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

    expect(isSamePiece(blackRook, chessboard.getPiece('a8'))).toBe(true);
    expect(isSamePiece(blackRook, chessboard.getPiece('h8'))).toBe(true);
    expect(isSamePiece(whiteRook, chessboard.getPiece('a1'))).toBe(true);
    expect(isSamePiece(whiteRook, chessboard.getPiece('h1'))).toBe(true);

    expect(isSamePiece(blackKnight, chessboard.getPiece('b8'))).toBe(true);
    expect(isSamePiece(blackKnight, chessboard.getPiece('g8'))).toBe(true);
    expect(isSamePiece(whiteKnight, chessboard.getPiece('b1'))).toBe(true);
    expect(isSamePiece(whiteKnight, chessboard.getPiece('g1'))).toBe(true);

    expect(isSamePiece(blackBishop, chessboard.getPiece('c8'))).toBe(true);
    expect(isSamePiece(blackBishop, chessboard.getPiece('f8'))).toBe(true);
    expect(isSamePiece(whiteBishop, chessboard.getPiece('c1'))).toBe(true);
    expect(isSamePiece(whiteBishop, chessboard.getPiece('f1'))).toBe(true);

    expect(isSamePiece(blackQueen, chessboard.getPiece('d8'))).toBe(true);
    expect(isSamePiece(whiteQueen, chessboard.getPiece('d1'))).toBe(true);

    expect(isSamePiece(blackKing, chessboard.getPiece('e8'))).toBe(true);
    expect(isSamePiece(whiteKing, chessboard.getPiece('e1'))).toBe(true);

    expect(isSamePiece(blackPawn, chessboard.getPiece('a7'))).toBe(true);
    expect(isSamePiece(blackPawn, chessboard.getPiece('b7'))).toBe(true);
    expect(isSamePiece(blackPawn, chessboard.getPiece('c7'))).toBe(true);
    expect(isSamePiece(blackPawn, chessboard.getPiece('d7'))).toBe(true);
    expect(isSamePiece(blackPawn, chessboard.getPiece('e7'))).toBe(true);
    expect(isSamePiece(blackPawn, chessboard.getPiece('f7'))).toBe(true);
    expect(isSamePiece(blackPawn, chessboard.getPiece('g7'))).toBe(true);
    expect(isSamePiece(blackPawn, chessboard.getPiece('h7'))).toBe(true);

    expect(isSamePiece(whitePawn, chessboard.getPiece('a2'))).toBe(true);
    expect(isSamePiece(whitePawn, chessboard.getPiece('b2'))).toBe(true);
    expect(isSamePiece(whitePawn, chessboard.getPiece('c2'))).toBe(true);
    expect(isSamePiece(whitePawn, chessboard.getPiece('d2'))).toBe(true);
    expect(isSamePiece(whitePawn, chessboard.getPiece('e2'))).toBe(true);
    expect(isSamePiece(whitePawn, chessboard.getPiece('f2'))).toBe(true);
    expect(isSamePiece(whitePawn, chessboard.getPiece('g2'))).toBe(true);
    expect(isSamePiece(whitePawn, chessboard.getPiece('h2'))).toBe(true);
  });

  describe('test placePiece', () => {
    test('place piece on valid position', () => {
      const res = chessboard.placePiece(position, piece);
      expect(res).toBeTruthy;
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
      expect(chessboard.getPiece(position)).toBeNull;
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
    test.todo('test legal move');

    test.todo('test illegal move');
  });
});
