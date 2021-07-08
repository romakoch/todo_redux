import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

export const todoAdapter = createEntityAdapter()
export const todoSelectors = todoAdapter.getSelectors((state) => state.todos)

const todoSlice = createSlice({
  name: 'todos',
  initialState: todoAdapter.getInitialState({
    deletedTodos: [],
  }),
  reducers: {
    addTodo: todoAdapter.addOne,
    addTodos: todoAdapter.addMany,
    deleteTodo(state, action) {
      state.deletedTodos.push(state.entities[action.payload])
      todoAdapter.removeOne(state, action)
    },
    deleteAllTodos: todoAdapter.removeAll,
    updateTodo: todoAdapter.updateOne,
    restoreTodo(state, action) {
      todoAdapter.addOne(state, action)
      state.deletedTodos = state.deletedTodos.filter(
        (e) => e.id !== action.payload.id
      )
    },
    restoreAll(state, action) {
      todoAdapter.addMany(state, action)
      state.deletedTodos = []
    },
  },
})

export const {
  addTodo,
  addTodos,
  deleteTodo,
  deleteAllTodos,
  updateTodo,
  restoreTodo,
  restoreAll,
} = todoSlice.actions

export default todoSlice.reducer
