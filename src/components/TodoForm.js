import React, { useState } from "react";
import uuid from "uuid";
import "./TodoList.css";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="FearList-Input"
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <button className="FearList-Submit" type="submit">submit</button>
    </form>
  );
}

export default TodoForm;
