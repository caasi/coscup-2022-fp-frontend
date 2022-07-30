interface RequestAsyncAction<C> {
  type: 'async/request'
  context: C
}

interface SuccessAsyncAction<C, T> {
  type: 'async/success'
  context: C
  payload: T
}

interface FailureAsyncAction<C> {
  type: 'async/failure'
  context: C
  error: Error
}

export type AsyncAction<C, T> =
  | RequestAsyncAction<C>
  | SuccessAsyncAction<C, T>
  | FailureAsyncAction<C>

export const request = <C>(context: C): RequestAsyncAction<C> => ({
  type: 'async/request',
  context,
})

export const success = <C, T>(context: C, payload: T): SuccessAsyncAction<C, T> => ({
  type: 'async/success',
  context,
  payload
})

export const failure = <C>(context: C, error: Error): FailureAsyncAction<C> => ({
  type: 'async/failure',
  context,
  error
})
