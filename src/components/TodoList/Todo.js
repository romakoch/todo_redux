import React from 'react'
import { useDispatch } from 'react-redux'

const Todo = ({ text, completed, id }) => {
  const deleteButton = () => {}
  const toggleTodoState = () => {}
  return (
    <div className="todo">
      <input type="checkbox" value={completed} onChange={toggleTodoState} />
      <span>{text}</span>
      <button onClick={deleteButton}>x</button>
    </div>
  )
}

export default Todo
