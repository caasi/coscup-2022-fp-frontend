import * as TDI from './ToDoItem'

export interface ToDoList {
  key: number
  todos: TDI.ToDoItem[]
}

export const create = (): ToDoList => ({
  key: 0,
  todos: []
})

export const append = (item: TDI.ToDoItem) => (list: ToDoList): ToDoList => {
  const { key: prev, todos } = list
  const key = prev + 1
  return {
    key,
    todos: [...todos, item]
  }
}

export const updateById = (id: string, item: TDI.ToDoItem) => (list: ToDoList): ToDoList => {
  const { key, todos } = list
  const i = todos.findIndex((item) => item.id === id)
  if (i === -1) return list
  return {
    key,
    todos: [
      ...todos.slice(0, i),
      item,
      ...todos.slice(i + 1)
    ]
  }
}

export const removeById = (id: string) => (list: ToDoList): ToDoList => {
  const { key, todos } = list
  const i = todos.findIndex((item) => item.id === id)
  if (i === -1) return list
  return {
    key,
    todos: [
      ...todos.slice(0, i),
      ...todos.slice(i + 1)
    ]
  }
}
