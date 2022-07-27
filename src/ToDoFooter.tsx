interface ToDoFooterProps {
  count: number
}

const ToDoFooter = ({ count }: ToDoFooterProps) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count}</strong> ToDos
      </span>
    </footer>
  )
}

export default ToDoFooter
