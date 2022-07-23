export interface ToDoItem {
  id: string
  title: string
  done: boolean
}

export const create = (id: string, title: string, done: boolean): ToDoItem =>
  ({ id, title, done })

export const id = (item: ToDoItem): string => item.id

export const title = (item: ToDoItem): string => item.title

export const done = (item: ToDoItem): boolean => item.done

export const update = (done: boolean) => (item: ToDoItem) => ({
  id: item.id,
  title: item.title,
  done,
})
