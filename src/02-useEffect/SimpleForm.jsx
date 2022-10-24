import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [form, setForm] = useState({ username: "", email: "" });
  const { username, email } = form;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  //es mejor tener useEffects separados que esten pendientes de un cambio en especifico
  //se manda a llamar creado el componente
  useEffect(() => {
    //console.log("useEffect Called!!");
  }, []);
  //se manda a llamar cuando cambia el valor de form
  useEffect(() => {
    //console.log("form Change!!");
  }, [form]);
  //se manda a llamar cuando cambia el valor de form.email
  useEffect(() => {
    //console.log("email Change!!");
  }, [form.email]);

  return (
    <>
      <h1>Simple form</h1>
      <hr />
      <input
        value={username}
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        className="form-control my-2"
        onChange={onInputChange}
      />

      <input
        value={email}
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        className="form-control my-2"
        onChange={onInputChange}
      />
      {username === "user" && <Message />}
    </>
  );
};
