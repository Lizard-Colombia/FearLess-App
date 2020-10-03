import React, { useEffect, useState } from "react";
import WelcomeMessage from "./welcome-message";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

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
    <main>
      <header>
        <nav>
          <a href="/">
            <span role="img" aria-label="bamboo">
              🎍
            </span>
          </a>{" "}
          |{" "}
          <a href="/">
            <span>FearLess</span>
          </a>{" "}
          |
          <a href="./settings-page">
            <span role="img" aria-label="gear">
              ⚙
            </span>
          </a>
        </nav>
      </header>
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
        We are now going to build a list of fears that we can work on together.
      </p>
      {/* Begin List */}
      <p> My Fear List</p>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />

      {/* End of List */}

      {/* begin bottom navigation section */}

      <nav>
        <button>Progress</button>

        <button>Profile</button>

        <button>Emergency</button>

        <button>Rewards</button>

        <button>Tasks</button>
      </nav>
      <footer>©Elizabeth Smith | 2020</footer>
    </main>
  );
}

export default App;
