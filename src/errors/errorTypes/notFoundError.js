import HttpError from './httpError';

class NotFoundError extends HttpError {
  constructor(message, data) {
    super(404, message, data);
  }
}

export default NotFoundError;
