import React, { useEffect, useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


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
 
        {/* Begin List */}
        <p> Hi, Please enter your name.</p>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
        />

        {/* End of List */}

        {/* begin bottom navigation section */}

        <footer>
         
        </footer>
      </main>
    </BrowserRouter>
  );
}

export default App;
