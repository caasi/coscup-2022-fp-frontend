import { FormEvent, MouseEvent } from 'react'
import cx from 'classnames'
import { ToDoItem as TDI } from './libs'

interface ToDoItemProps {
  todo: TDI.ToDoItem
  onToggle?: (evt: FormEvent<HTMLInputElement>, todo: TDI.ToDoItem) => void
  onDestroy?: (evt: MouseEvent<HTMLButtonElement>, todo: TDI.ToDoItem) => void
}

const ToDoItem = ({ todo, onToggle, onDestroy }: ToDoItemProps) => {
  return (
    <li className={cx({ completed: todo.done })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.done}
          onChange={
            onToggle
              ? (evt) => onToggle(evt, todo)
              : undefined
          }
        />
        <label>{todo.title}</label>
        <button
          className="destroy"
          onClick={
            onDestroy
              ? (evt) => onDestroy(evt, todo)
              : undefined
          }
        />
      </div>
    </li>
  )
}

export default ToDoItem
