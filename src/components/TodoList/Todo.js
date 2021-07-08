import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../../store/todoSlice'

const Todo = ({ text, completed, id }) => {
  const dispatch = useDispatch()
  const deleteButton = () => {
    dispatch(deleteTodo(id))
  }
  const toggleTodoState = () => {
    dispatch(
      updateTodo({
        id: id,
        changes: {
          completed: !completed,
        },
      })
    )
  }
  return (
    <div className="todo__list__wrapper">
      <div className="todo__item__wrapper">
        <div className="todo">
          <div>
            <input
              type="checkbox"
              value={completed}
              onChange={toggleTodoState}
            />
            <span>{text}</span>
          </div>
          <button className="deleteOne" onClick={deleteButton}>
            x
          </button>
        </div>
      </div>
    </div>
  )
}

export default Todo
