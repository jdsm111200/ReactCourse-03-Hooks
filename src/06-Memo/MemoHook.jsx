import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterations = 100) => {
  for (let i = 0; i < iterations; i++) {
    console.log("Heavy stuff");
  }
  return `${iterations} iterations done`;
};

export const MemoHook = () => {
  const { counter, increment, decrement, reset } = useCounter(5000);
  const [show, setShow] = useState(true);

  //useMemo memoriza el retorno del callback y solo lo vuelve a ejecutar si sus dependencias cambian
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => decrement()}
        >
          -1
        </button>
        <button type="button" className="btn btn-primary" onClick={reset}>
          Reset
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => increment()}
        >
          +1
        </button>
      </div>
      <button
        className="btn btn-warning"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
      <h4>{memorizedValue}</h4>
    </>
  );
};
