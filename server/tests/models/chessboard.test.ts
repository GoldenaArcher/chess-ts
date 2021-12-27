import Chessboard from '../../src/models/chessboard';
import Color from '../../src/models/color';
import Bishop from '../../src/models/pieces/bishop';
import ChessPiece from '../../src/models/pieces/chessPiece';
import IllegalPositionError from '../../src/models/errors/illegalPositionError';

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

  describe('test placePiece', () => {
    test('place piece on valid position', () => {
      const res = chessboard.placePiece(position, piece);
      expect(res).toBeTruthy;
      expect(piece.getPosition()).toBe(position);
      expect(chessboard.getPiece(position)).toBe(piece);
    });

    test("place piece on invalid position, position's length is equal to 2", () => {
      position = 'ah2';
      expect(() => chessboard.placePiece(position, piece)).toThrowError(
        IllegalPositionError
      );
    });

    test("place piece on invalid position, position's does not match a1-h8", () => {
      position = 'a9';
      expect(() => chessboard.placePiece(position, piece)).toThrowError(
        IllegalPositionError
      );
    });
  });

  describe('test getPiece', () => {
    test.todo('get piece on invalid position');

    test.todo('get piece on valid position');
  });

  describe('test move function', () => {
    test.todo('test legal move');

    test.todo('test illegal move');
  });
});
