import { createStore, applyMiddleware } from 'redux'
import thunk, { ThunkDispatch, ThunkMiddleware } from 'redux-thunk'

import { Action } from './actions'
import reducer from './reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: Function
  }
}

export type State = ReturnType<typeof reducer>

export type Dispatch = ThunkDispatch<State, any, Action>

export default createStore(
  reducer,
  applyMiddleware<Dispatch, any>(thunk as ThunkMiddleware<State, Action, any>),
)
