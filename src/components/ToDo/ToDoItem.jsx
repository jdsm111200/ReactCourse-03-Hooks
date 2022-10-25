import React from "react";

export const ToDoItem = ({ todo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{todo.desc}</span>
      <button className="btn btn-danger">Delete</button>
    </li>
  );
};
