import { isSameColor } from './../util/chessUtil';
import { getRandomInt } from '../util/matchUtil';
import Chessboard from './chessboard';
import Player from './player';

class Match {
  private board: Chessboard;
  private players: Player[];
  private currPlayer: Player | undefined;

  constructor() {
    this.board = new Chessboard();
    this.players = [];
    this.currPlayer = undefined;
  }

  public initialize(players: Player[]): void {
    this.players = players;
    this.currPlayer = players[getRandomInt(0, players.length - 1)];
  }

  public loadMatch(board: object, players: Player[], currPlayer: Player): void {
    this.board.loadBoard(board);
    this.players = players;
    this.currPlayer = currPlayer;
  }

  private turn() {
    this.currPlayer = this.players.filter(
      (player) => player.getUserId() === this.currPlayer?.getUserId()
    )[0];
  }

  public move(fromPos: string, toPos: string) {
    const fromPiece = this.board.getPiece(fromPos);

    if (!isSameColor(this.currPlayer, fromPiece)) return;

    this.board.move(fromPos, toPos);
    this.turn();
  }
}

export default Match;
