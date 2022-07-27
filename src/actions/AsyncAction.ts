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
