import { KeyboardEvent, FormEvent, MouseEvent, useState } from 'react'
import { ToDoList as TDL, ToDoItem as TDI } from './libs'
import ToDoItem from './ToDoItem'
import ToDoFooter from './ToDoFooter'

function App() {
  const [title, setTitle] = useState('')
  const [toDoList, setToDoList] = useState(TDL.create())

  const handleKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key !== 'Enter') return
    setToDoList(TDL.append(title))
  }

  const handleItemChange =
    (evt: FormEvent<HTMLInputElement>, todo: TDI.ToDoItem) => {
      setToDoList(TDL.updateById(todo.id, !todo.done))
    }

  const handleItemDestroy =
    (evt: MouseEvent<HTMLButtonElement>, todo: TDI.ToDoItem) => {
      setToDoList(TDL.removeById(todo.id))
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
      {toDoList.todos.length > 0 &&
        (
          <section className="main">
            <ul className="todo-list">
              {toDoList.todos.map((todo) =>
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
      <ToDoFooter count={toDoList.todos.length} />
    </div>
  );
}

export default App;
