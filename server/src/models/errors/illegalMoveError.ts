class IllegalMoveError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export default IllegalMoveError;
