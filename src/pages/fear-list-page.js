import React, { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

// FEAR LIST FUNCTIONS
// const [todos, setTodos] = useState([]);
const LOCAL_STORAGE_KEY = "react-todo-list-todos";
const [todos, setTodos] = useState(0);

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

function FearListPage() {
  return (
    <>
      <h1>My Fear list</h1>

      <p>
        Instructions: Type your fears, one at a time, into the box below and
        click the submit button.
      </p>

      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default FearListPage;
