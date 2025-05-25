export const BASE_URL = "http://localhost:3000"
export const API_URL = `${BASE_URL}/api"`

export const HttpErrors = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
} as const;

export const Url = {
  getStarted: '/get-started',
}

export type HttpErrorCode = keyof typeof HttpErrors;
