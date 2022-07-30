import { Dispatch } from 'redux'

import { ToDoService } from '../services'

import * as ToDoListAction from './ToDoListAction'
import * as AsyncAction from './AsyncAction'

type AppendDispatch = Dispatch<AsyncAction.AsyncAction<string, ToDoListAction.Action>>

export const append = (title: string) => async (dispatch: AppendDispatch) => {
  dispatch(AsyncAction.request(title))
  try {
    const item = await ToDoService.create(title)
    dispatch(AsyncAction.success(title, ToDoListAction.append(item)))
  } catch (err: any) {
    dispatch(AsyncAction.failure(title, err))
  }
}

type UpdateDispatch = Dispatch<AsyncAction.AsyncAction<[string, boolean], ToDoListAction.Action>>

export const updateById = (id: string, done: boolean) => async (dispatch: UpdateDispatch) => {
  const context: [string, boolean] = [id, done]
  dispatch(AsyncAction.request(context))
  try {
    const item = await ToDoService.update(id, done)
    dispatch(AsyncAction.success(context, ToDoListAction.updateById(id, item)))
  } catch (err: any) {
    dispatch(AsyncAction.failure(context, err))
  }
}

type RemoveDispatch = Dispatch<AsyncAction.AsyncAction<string, ToDoListAction.Action>>

export const removeById = (id: string) => async (dispatch: RemoveDispatch) => {
  dispatch(AsyncAction.request(id))
  try {
    await ToDoService.remove(id)
    dispatch(AsyncAction.success(id, ToDoListAction.removeById(id)))
  } catch (err: any) {
    dispatch(AsyncAction.failure(id, err))
  }
}
