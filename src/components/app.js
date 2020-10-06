import React, { useEffect, useState } from "react";

import { BrowserRouter, Link} from "react-router-dom";
import Header from "./header";

import WelcomeMessage from "./welcome-message";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./TodoList.css";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";
// first USERNAME Section
function App() {
  const [userName, setUserName] = useState("");
  const onUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  // FEAR LIST FUNCTIONS
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  // RETURN SECTION
  return (
    <BrowserRouter>
      <Header />

      <main>
        <h1>FearLess</h1>
        <WelcomeMessage greeting="Welcome" name=""></WelcomeMessage>

        <form>
          <label>
            Username:{" "}
            <input type="text" value={userName} onChange={onUserNameChange} />
          </label>
          <input type="submit" />
        </form>
        {/* have the form now Welcome the user - by name -  */}
        <p>Hi, {userName}! It is nice to meet you.</p>
        <p>
          We are now going to build a list of fears that we can work on
          together.
        </p>
        {/* Begin List */}
        <p className="FearList-Title"> My Fear List</p>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />

        {/* End of List */}

        {/* begin bottom navigation section */}

        <footer>
          <nav>
            <Link to="./progress-page">Progress</Link>
            <Link to="./profile-page">Profile</Link>
            <Link to="./emergency-page">Emergency</Link>
            <Link to="./rewards-page">Rewards</Link>
            <Link to="./tasks-page">Tasks</Link>
          </nav>
        </footer>
      </main>
    </BrowserRouter>
  );
}

export default App;
