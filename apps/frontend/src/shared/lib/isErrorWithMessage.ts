type TErrorWithMessage = {
  status: number
  data: {
    message: string
  }
}

export const isErrorMessage = (error: unknown): error is TErrorWithMessage => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'data' in error &&
    typeof (error as Record<string, unknown>).data === 'object'
  )
}
