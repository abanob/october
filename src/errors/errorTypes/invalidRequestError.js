import HttpError from './httpError';

class InvalidRequestError extends HttpError {
  constructor(message, data) {
    super(400, message, data);
  }
}

export default InvalidRequestError;
