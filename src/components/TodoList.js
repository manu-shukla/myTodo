import React from 'react'
import Todo from './Todo'
function TodoList({todos, setTodos , filterTodo}) {
    // console.log(todos)
    return (
        <div className="todo-container">
        <ul className="todo-list">
         {
             filterTodo.map(todo=><Todo text={todo.text} key={todo.id} todos={todos} setTodos={setTodos} todo={todo}/>)
         }
        </ul>
      </div>
    )
}

export default TodoList
