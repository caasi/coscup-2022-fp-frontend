interface ToDoFooterProps {
  count: number
  isLoading: boolean
}

const ToDoFooter = ({ count, isLoading }: ToDoFooterProps) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        {isLoading
          ? <strong>Loading ToDos....</strong>
          : <><strong>{count}</strong> ToDos</>
        }
      </span>
    </footer>
  )
}

export default ToDoFooter
