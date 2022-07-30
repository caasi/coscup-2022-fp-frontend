import { KeyboardEvent, FormEvent, MouseEvent, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ToDoItem as TDI } from './libs'
import { AsyncToDoListAction as Action } from './actions'
import { State, Dispatch } from './store'

import ToDoItem from './ToDoItem'
import ToDoFooter from './ToDoFooter'

function App() {
  const isLoading = useSelector<State, boolean>((state) => state.isLoading)
  const todos = useSelector<State, TDI.ToDoItem[]>((state) => state.list.todos)
  const dispatch = useDispatch<Dispatch>()
  const [title, setTitle] = useState('')

  const handleKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key !== 'Enter') return
    dispatch(Action.append(title))
    setTitle('')
  }

  const handleItemChange =
    (evt: FormEvent<HTMLInputElement>, todo: TDI.ToDoItem) => {
      dispatch(Action.updateById(todo.id, !todo.done))
    }

  const handleItemDestroy =
    (evt: MouseEvent<HTMLButtonElement>, todo: TDI.ToDoItem) => {
      dispatch(Action.removeById(todo.id))
    }

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
          onKeyDown={handleKeyDown}
        />
      </header>
      {todos.length > 0 &&
        (
          <section className="main">
            <ul className="todo-list">
              {todos.map((todo) =>
                <ToDoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={handleItemChange}
                  onDestroy={handleItemDestroy}
                />
              )}
            </ul>
          </section>
        )
      }
      <ToDoFooter count={todos.length} isLoading={isLoading} />
    </div>
  );
}

export default App;
