import React, { useState } from "react";

export const ToDoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  const [done, setDone] = useState(todo.done);

  return (
    <li className="list-group-item d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <span
          className={`aling-self-center ${
            todo.done ? "text-decoration-line-through text-success" : ""
          }`}
          onClick={() => onToggleTodo(todo.id)}
        >
          {todo.description}
        </span>
      </div>
      <button className="btn btn-danger " onClick={() => onDeleteTodo(todo.id)}>
        Delete
      </button>
    </li>
  );
};
