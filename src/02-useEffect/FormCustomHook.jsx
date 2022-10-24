import React, { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormCustomHook = () => {
  const formObject = { username: "", email: "", password: "" };
  //react form hook se puede utilizar
  const { username, email, password, form, onInputChangeForm, onResetForm } =
    useForm(formObject);
  //const { username, email, password } = form;

  return (
    <>
      <h1>Form with Custom Hook</h1>
      <hr />
      <input
        value={username}
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        className="form-control my-2"
        onChange={onInputChangeForm}
      />

      <input
        value={email}
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        className="form-control my-2"
        onChange={onInputChangeForm}
      />
      <input
        value={password}
        type="text"
        name="password"
        id="password"
        placeholder="Password"
        className="form-control my-2"
        onChange={onInputChangeForm}
      />
      <button onClick={onResetForm} className="btn btn-primary my-2">
        Reset
      </button>
    </>
  );
};
