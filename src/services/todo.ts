import { Time, ToDoItem as TDI } from '../libs'
import { v4 as uuidv4 } from 'uuid'

const cache: Partial<Record<string, TDI.ToDoItem>> = {}

export const create = (title: string): Promise<TDI.ToDoItem> => {
  const id = uuidv4()
  const item = TDI.create(id, title, false)
  cache[id] = item
  return Promise.resolve(item)
    .then(Time.delay(1500))
}

export const update = (id: string, done: boolean): Promise<TDI.ToDoItem> => {
  const item = cache[id]
  if (!item) {
    return Promise.reject(new Error('not found!'))
  }
  return Promise.resolve(item)
    .then(TDI.update(done))
    .then(Time.delay(3000))
    .then((item) => {
      cache[id] = item
      return item
    })
}

export const remove = (id: string): Promise<string> => {
  delete cache[id]
  return Promise.resolve(id)
    .then(Time.delay(1000))
}
