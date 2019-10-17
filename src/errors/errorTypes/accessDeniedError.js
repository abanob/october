import HttpError from './httpError';

class AccessDeniedError extends HttpError {
  constructor(message, data) {
    super(401, message, data);
  }
}

export default AccessDeniedError;
