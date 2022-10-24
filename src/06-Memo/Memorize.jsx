import React, { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment, decrement, reset } = useCounter();
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>
        Counter: <Small value={counter} />
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
    </>
  );
};
