import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoSelectors } from '../../store/todoSlice'
import Todo from './Todo'
const TodoList = () => {
  const allTodos = useSelector(todoSelectors.selectEntities)
  const todoList = []
  console.log(allTodos)
  for (const id in allTodos) {
    if (Object.hasOwnProperty.call(allTodos, id)) {
      const todoItem = allTodos[id]
      todoList.push(
        <Todo
          key={todoItem.id}
          id={todoItem.id}
          completed={todoItem.completed}
          text={todoItem.text}
        ></Todo>
      )
    }
  }

  return (
    <div className="todo__list">
      <h2>Todos:</h2>

      <ul>{todoList}</ul>

      <h3>Count:</h3>

      <button className="delete-btn">Delete all</button>
    </div>
  )
}

export default TodoList
