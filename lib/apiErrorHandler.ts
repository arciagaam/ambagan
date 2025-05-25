export function apiErrorHandler(error: unknown) {
    if (error instanceof SyntaxError) {
      return { message: 'Invalid JSON in response.', status: 500 }
    }
  
    if (error instanceof Error) {
      return { message: error.message, status: 500 }
    }
  
    return { message: 'Something went wrong.', status: 500 }
  }