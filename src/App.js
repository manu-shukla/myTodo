import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodo, setFilterTodo] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodo(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodo(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodo(todos);
        break;
    }
  };
  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    filterHandler();
    setLocal();
  }, [todos, status]);

  const getLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let x = JSON.parse(localStorage.getItem("todos"));
      setTodos(x);
    }
  };
  const setLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="App">
      <header>
        <h1>Manu's ToDo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      ></Form>
      <TodoList
        filterTodo={filterTodo}
        todos={todos}
        setTodos={setTodos}
      ></TodoList>
    </div>
  );
}

export default App;
