import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, addTodos } from '../../store/todoSlice'
import { nanoid } from '@reduxjs/toolkit'

const AddTodo = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const format = (arr) => {
    return arr.map((item) => item.replace(/^[ \t]+|[ \t]+$/, ''))
  }

  const submit = () => {
    if (text.length > 0) {
      const items = text.split(',')
      const formatItems = format(items)
      // console.log(formatItems)

      dispatch(
        addTodos(
          formatItems.map((i) => ({
            id: nanoid(),
            text: i,
            completed: false,
          }))
        )
      )
    }
  }
  return (
    <>
      <div className="todo__add_todo_form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button onClick={submit}>Add todo</button>
    </>
  )
}

export default AddTodo
