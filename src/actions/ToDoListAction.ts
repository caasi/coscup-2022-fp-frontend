interface AppendAction {
  type: 'todos/append',
  payload: string
}

interface UpdateByIdAction {
  type: 'todos/updateById',
  payload: [string, boolean]
}

interface RemoveByIdAction {
  type: 'todos/removeById',
  payload: string
}

export type Action =
  | AppendAction
  | UpdateByIdAction
  | RemoveByIdAction

export const append = (title: string): AppendAction => ({
  type: 'todos/append' as 'todos/append',
  payload: title
})

export const updateById = (id: string, done: boolean): UpdateByIdAction => ({
  type: 'todos/updateById',
  payload: [id, done]
})

export const removeById = (id: string): RemoveByIdAction => ({
  type: 'todos/removeById',
  payload: id
})
