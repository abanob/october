import NotFoundError from './errorTypes/notFoundError';
import InvalidRequestError from './errorTypes/invalidRequestError';
import AccessDeniedError from './errorTypes/accessDeniedError';
import InternalServerError from './errorTypes/internalServerError';

function errorFactory(status) {
  switch (status) {
    case 'INVALID_REQUEST':
      return new InvalidRequestError('Invalid request, please check your input parameters');

    case 'ZERO_RESULTS':
    case 404:
      return new NotFoundError('No company nor phone were found for the provided information');

    case 'REQUEST_DENIED':
      return AccessDeniedError('Access denied error, please check your API TOKEN');

    case 'UNKOWN_ERROR':
    default:
      return new InternalServerError('Internal server error, an unknown error occured, please excuse us.');
  }
}

export default errorFactory;
