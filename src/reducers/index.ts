import { Action } from '../actions'
import { ToDoList as TDL } from '../libs'

const initialState = TDL.create()

const reducer = (state = initialState, action: Action): TDL.ToDoList => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
