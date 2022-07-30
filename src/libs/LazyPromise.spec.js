import * as LP from './LazyPromise'

const one = LP.of(1)

const two = LP.of(2)

describe('LazyPromise', () => {
  it('should chain lazy promises', async () => {
    const run =
      one |> LP.then((x) =>
      two |> LP.then((y) =>
        LP.of(x + y)
      ))
    expect(await run()).toBe(3)
  })
})
