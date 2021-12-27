import Chessboard from '../../src/models/chessboard';
import Color from '../../src/models/color';
import Bishop from '../../src/models/pieces/bishop';

describe('Test Chessboard functions', () => {
  let chessboard: Chessboard;

  beforeEach(() => {
    chessboard = new Chessboard();
  });

  test('test constructor', () => {
    const board = chessboard.getBoard();
    expect(board.length === 8);
    expect(board[0].length === 8);
  });

  describe('test placePiece', () => {
    test('place piece on valid position', () => {
      const position = 'a2';
      const piece = new Bishop(Color.Black, chessboard);
      const res = chessboard.placePiece(position, piece);
      expect(res).toBeTruthy;
      expect(piece.getPosition()).toBe(position);
      expect(chessboard.getPiece(position)).toBe(piece);
    });

    test.todo('place piece on invalid position')
  });

  describe('test getPiece', () => {
    test.todo('get piece on invalid position');

    test.todo('get piece on valid position')
  });
});
