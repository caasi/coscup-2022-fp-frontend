import { Action } from '../actions'
import { ToDoList as TDL } from '../libs'

const initialState = TDL.create()

const reducer = (state = initialState, action: Action): TDL.ToDoList => {
  switch (action.type) {
    case 'todos/append': {
      return TDL.append(action.payload)(state)
    }
    case 'todos/updateById': {
      const [id, done] = action.payload
      return TDL.updateById(id, done)(state)
    }
    case 'todos/removeById': {
      return TDL.removeById(action.payload)(state)
    }
    default:
      return state
  }
}

export default reducer
