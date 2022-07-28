import { KeyboardEvent, FormEvent, MouseEvent, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ToDoList as TDL, ToDoItem as TDI } from './libs'
import { ToDoListAction as TDLAction } from './actions'

import ToDoItem from './ToDoItem'
import ToDoFooter from './ToDoFooter'

function App() {
  const todos = useSelector<TDL.ToDoList, TDI.ToDoItem[]>((state) => state.todos)
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')

  const handleKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key !== 'Enter') return
    dispatch(TDLAction.append(title))
    setTitle('')
  }

  const handleItemChange =
    (evt: FormEvent<HTMLInputElement>, todo: TDI.ToDoItem) => {
      dispatch(TDLAction.updateById(todo.id, !todo.done))
    }

  const handleItemDestroy =
    (evt: MouseEvent<HTMLButtonElement>, todo: TDI.ToDoItem) => {
      dispatch(TDLAction.removeById(todo.id))
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
      <ToDoFooter count={todos.length} />
    </div>
  );
}

export default App;
