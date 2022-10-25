import React, { useReducer } from "react";
import { TodoAdd } from "../components/ToDo/TodoAdd";
import { ToDoList } from "../components/ToDo/ToDoList";
import { todoReducer } from "./todoReducer";

export const TODOApp = () => {
  const initialState = [
    { id: new Date().getTime(), description: "Aprender React", done: false },
    {
      id: new Date().getTime() * 2,
      description: "Aprender Mongo",
      done: false,
    },
  ];
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState);

  const onAddTodo = (newTodo) => {
    console.log(newTodo);
  };
  return (
    <>
      <h1>TODOApp</h1>
      <h2>Total () Undone () Done()</h2>
      <hr />
      <div className="row">
        <div className="col-7">
          <ToDoList todos={todos} />
        </div>
        <div className="col-5">
          <TodoAdd onAddTodo={onAddTodo} />
        </div>
      </div>
    </>
  );
};
