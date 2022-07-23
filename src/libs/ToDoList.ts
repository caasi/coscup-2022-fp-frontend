import * as TDI from './ToDoItem'

export interface ToDoList {
  key: number
  todos: TDI.ToDoItem[]
}

export const create = (): ToDoList => ({
  key: 0,
  todos: []
})

export const append = (title: string) => (list: ToDoList): ToDoList => {
  const { key: prev, todos } = list
  const key = prev + 1
  const item = TDI.create(`${key}`, title, false)
  return {
    key,
    todos: [...todos, item]
  }
}

export const updateById = (id: string, done: boolean) => (list: ToDoList): ToDoList => {
  const { key, todos } = list
  const i = todos.findIndex((item) => item.id === id)
  if (i === -1) return list
  return {
    key,
    todos: [
      ...todos.slice(0, i),
      TDI.update(done)(todos[i]),
      ...todos.slice(i + 1)
    ]
  }
}
