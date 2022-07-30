export const delay = (time: number) => <T>(x: T): Promise<T> =>
  new Promise((resolve) => setTimeout(resolve, time, x))
