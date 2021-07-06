import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

function App() {
  return (
    <div className="App">
      <div className="todo__wrapper">
        <div className="todo__body">
          <div className="todo__header">
            <p>CRUD application Todo list</p>
            <p>You can also add multiple item by separating them by comma</p>
            <p>
              <i>Like Learn JS, Learn HTML, Get a job etc.</i>
            </p>
          </div>
          <AddTodo></AddTodo>
          <TodoList></TodoList>
        </div>
      </div>
    </div>
  )
}

export default App
