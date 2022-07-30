import { Action, ToDoListAction } from '../actions'
import { ToDoList as TDL } from '../libs'
import toDoListReducer from './toDoList'

interface State {
  isLoading: boolean
  list: TDL.ToDoList
}

const initialState = {
  isLoading: false,
  list: TDL.create(),
}

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'async/request': {
      return {
        ...state,
        isLoading: true,
      }
    }
    case 'async/success': {
      const act = action.payload as ToDoListAction.Action
      return {
        isLoading: false,
        list: toDoListReducer(state.list, act)
      }
    }
    case 'async/failure': {
      return {
        ...state,
        isLoading: false,
      }
    }
    default:
      return state
  }
}

export default reducer
