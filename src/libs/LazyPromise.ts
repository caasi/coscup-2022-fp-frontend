export type LazyPromise<T> = () => Promise<T>

export const of = <T>(x: T) =>
  () => Promise.resolve(x)

export const then = <T, U>(f: (x: T) => LazyPromise<U>) => (lp: LazyPromise<T>): LazyPromise<U> =>
  () => lp().then((x: T) => f(x)())
