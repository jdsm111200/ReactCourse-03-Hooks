import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initTodo = () => JSON.parse(localStorage.getItem("todos")) || [];

export const useToDo = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, [], initTodo);

  const onAddTodo = (newTodo) => {
    const action = {
      type: "ADD",
      payload: newTodo,
    };
    dispatchTodo(action);
  };
  const onDeleteTodo = (id) => {
    const action = {
      type: "DELETE",
      payload: id,
    };
    dispatchTodo(action);
  };
  const onToggleTodo = (id) => {
    const action = {
      type: "TOGGLE",
      payload: id,
    };
    dispatchTodo(action);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    todos,
    todoCount: {
      total: todos.length,
      done: todos.filter((todo) => todo.done).length,
      pending: todos.filter((todo) => !todo.done).length,
    },
    onAddTodo,
    onDeleteTodo,
    onToggleTodo,
  };
};
