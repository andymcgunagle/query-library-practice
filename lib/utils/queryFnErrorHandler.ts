export function queryFnErrorHandler(error: Error | unknown) {
  if (error instanceof Error) {
    console.error(error.message);
    return {
      error: {
        message: error.message,
      },
    };
  } else {
    console.error(error);
    return {
      error: {
        message: 'An unknown error occurred.',
      },
    };
  };
};