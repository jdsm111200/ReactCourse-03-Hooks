import React, { useCallback, useState } from "react";
import { ShowIncrement } from "../components/06-Memo/ShowIncrement";
import { useCounter } from "../hooks";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  //const { counter } = useCounter();
  /*  const increment = () => {
    setCounter(counter + 1);
  }; */

  //lo que regresa es una funcion memorizada que se va a ejecutar cuando sus dependencias cambien
  const increment = useCallback((value = 1) => {
    //memoriza la funcion callback dentro del setCounter
    setCounter((c) => c + value);
  }, []);

  return (
    <>
      <h1>useCallBack: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </>
  );
};
