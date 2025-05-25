export type APIError = {
  message: string;
  status: number
}

export function apiErrorHandler(error: unknown): APIError {
  if (error instanceof SyntaxError) {
    return { message: 'Invalid JSON in response.', status: 500 }
  }

  if (error instanceof Error) {
    return { message: error.message, status: 500 }
  }

  return { message: 'Something went wrong.', status: 500 }
}