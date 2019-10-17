import HttpError from './httpError';

class InternalServerError extends HttpError {
  constructor(message, data) {
    super(500, message, data);
  }
}

export default InternalServerError;
