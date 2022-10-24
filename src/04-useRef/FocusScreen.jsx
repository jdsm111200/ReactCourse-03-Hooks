import React, { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();
  const onFocus = () => {
    inputRef.current.select();
    console.log(inputRef);
  };
  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        className="form-control"
        type="text"
        name="name"
        placeholder="Ingrese su nombre"
      />
      <button className="btn btn-primary my-2" onClick={onFocus}>
        Focus
      </button>
    </>
  );
};
