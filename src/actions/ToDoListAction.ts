import { PayloadAction } from '@reduxjs/toolkit'

export const append = (title: string): PayloadAction<string> => ({
  type: 'todos/append',
  payload: title
})

export const update = (done: boolean): PayloadAction<boolean> => ({
  type: 'todos/update',
  payload: done
})

export type Action =
  | ReturnType<typeof append>
  | ReturnType<typeof update>
