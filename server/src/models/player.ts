import Color from './color';

class Player {
  private color: Color;
  private userId: String;

  constructor(color: Color, userId: String) {
    this.color = color;
    this.userId = userId;
  }

  public getColor(): Color {
    return this.color;
  }

  public getUserId(): String {
    return this.userId;
  }
}

export default Player;
