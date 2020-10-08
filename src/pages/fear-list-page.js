import React, { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

// FEAR LIST FUNCTIONS
// const [todos, setTodos] = useState([]);
// const LOCAL_STORAGE_KEY = "react-todo-list-todos";

// useEffect(() => {
//   const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//   if (storageTodos) {
//     setTodos(storageTodos);
//   }
// }, []);

// useEffect(() => {
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
// }, [todos]);

// function addTodo(todo) {
//   setTodos([todo, ...todos]);
// }

// function toggleComplete(id) {
//   setTodos(
//     todos.map((todo) => {
//       if (todo.id === id) {
//         return {
//           ...todo,
//           completed: !todo.completed,
//         };
//       }
//       return todo;
//     })
//   );
// }

// function removeTodo(id) {
//   setTodos(todos.filter((todo) => todo.id !== id));
// }

function FearListPage() {
  return (
    <FearListPage>
      {/* BEGIN FEAR LIST */}
      <p className="FearList-Title"> My Fear List</p>
      {/* <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        /> */}

      {/* End of List */}
    </FearListPage>
  );
}

export default FearListPage;
