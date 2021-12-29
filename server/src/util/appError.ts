class AppError extends Error {
  private statusCode: number;
  private status: string;
  private operational: boolean;

  constructor(msg: string, statusCode: number) {
    super(msg);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.operational = true;

    Error.captureStackTrace(this, this.constructor);
  }

  public getStatusCode() {
    return this.statusCode;
  }

  public getStatus() {
    return this.status;
  }

  public getMessage() {
    return this.message;
  }

  public isOperational() {
    return this.operational;
  }
}

export default AppError;
