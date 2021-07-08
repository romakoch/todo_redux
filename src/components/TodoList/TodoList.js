import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  deleteAllTodos,
  restoreAll,
  restoreTodo,
  todoSelectors,
} from '../../store/todoSlice'
import Todo from './Todo'

const TodoList = () => {
  const dispatch = useDispatch()
  const allTodos = useSelector(todoSelectors.selectEntities)
  const todoCount = useSelector(todoSelectors.selectTotal)
  const deletedTodos = useSelector((state) => state.todos.deletedTodos)
  const todoList = []

  const restore = (item) => {
    dispatch(restoreTodo(item))
  }

  const restoreAllTodos = (items) => {
    dispatch(restoreAll(items))
  }

  const deletedTodoList = deletedTodos.map((item) => (
    <div className="wrap_deleted_todo">
      <div className="deleted_todo">
        <span>{item.text}</span>
        <button className="restore one" onClick={() => restore(item)}>
          Restore
        </button>
      </div>
    </div>
  ))

  //   console.log(allTodos)

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

  const deleteAll = () => {
    dispatch(deleteAllTodos())
  }

  return (
    <div className="todo__list">
      {todoList.length > 0 ? <h2>Todos:</h2> : <h2>Add todos!</h2>}

      <div className="todos">{todoList}</div>

      <h3>Count: {todoCount}</h3>

      <button className="deleteAll" onClick={deleteAll}>
        Delete all
      </button>
      <h2>Deleted Todos</h2>
      {deletedTodoList}
      <button className="restore" onClick={() => restoreAllTodos(deletedTodos)}>
        Restore all
      </button>
    </div>
  )
}

export default TodoList
