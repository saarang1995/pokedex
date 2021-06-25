export default class Network {
  static readonly HTTP_STATUS_CODE = {
    OK: 200, // Standard response for successful HTTP requests.
    'Bad Request': 400, //The server cannot or will not process the request due to an apparent client error
    Unauthorized: 401, // Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.
    Forbidden: 403, //  The request contained valid data and was understood by the server, but the server is refusing action.
    'Not Found': 404, // The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.
    'Method Not Allowed': 405, // The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request
    'Request Timeout': 408,
    'Internal Server Error': 500,
    'Not Implemented': 501,
    'Bad Gateway': 502,
    'Service Unavailable': 503,
    'No Content': 204, // The server successfully processed the request, and is not returning any content
  };

  static readonly ERROR_CODES = {
    SUCCESS: {
      message: 'ok',
      code: 0,
    },
    INVALID_PARAMETER: {
      message: 'Invalid/Missing Parameter',
      code: 1,
    },
    UNKNOWN_ERROR: {
      message: 'Unknown Error',
      code: 2,
    },
    POKEMON_NOT_FOUND: {
      message: 'Pokemon not found',
      code: 3,
    },
    POKEMON_NAME_SHOULD_BE_STRING: {
      message: `Pokemon's name should a string`,
      code: 4,
    },
    UNHANDLED: {
      message: 'Unhandled error',
      code: 5,
    },
  };
}
