import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ onAddTodo }) => {
  const { description, onInputChangeForm } = useForm({
    description: "",
  });

  const onNewTodo = (e) => {
    e.preventDefault();
    if (description === "") return;
    onAddTodo({
      id: new Date().getTime(),
      description: description.trim(),
      done: false,
    });
  };
  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form className="d-grid gap-2" onSubmit={onNewTodo}>
        <input
          id="description"
          className="form-control"
          value={description}
          onChange={onInputChangeForm}
          type="text"
          name="description"
          placeholder="Description"
        />
        <button type="sumbit" className="btn btn-primary ">
          Add
        </button>
      </form>
    </>
  );
};
