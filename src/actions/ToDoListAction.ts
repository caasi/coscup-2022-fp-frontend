import { ToDoItem as TDI } from '../libs'

interface AppendAction {
  type: 'todos/append',
  payload: TDI.ToDoItem
}

interface UpdateByIdAction {
  type: 'todos/updateById',
  payload: [string, TDI.ToDoItem]
}

interface RemoveByIdAction {
  type: 'todos/removeById',
  payload: string
}

export type Action =
  | AppendAction
  | UpdateByIdAction
  | RemoveByIdAction

export const append = (item: TDI.ToDoItem): AppendAction => ({
  type: 'todos/append',
  payload: item
})

export const updateById = (id: string, item: TDI.ToDoItem): UpdateByIdAction => ({
  type: 'todos/updateById',
  payload: [id, item]
})

export const removeById = (id: string): RemoveByIdAction => ({
  type: 'todos/removeById',
  payload: id
})
