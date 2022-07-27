export type ToDoItem = [string, string, boolean]

export const create = (id: string, title: string, done: boolean): ToDoItem =>
  [id, title, done]

export const id = ([id]: ToDoItem): string => id

export const title = ([, title]: ToDoItem): string => title

export const done = ([,, done]: ToDoItem): boolean => done

export const update = (done: boolean) => ([id, title]: ToDoItem) =>
  [id, title, done]
