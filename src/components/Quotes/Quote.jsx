import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ quote, author, next, prev, counter }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  //se manda a llamar cuando todas las mutaciones del DOM han sido aplicadas, basicamente es un afterMount
  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [quote]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <div className="btn-group" role="group" aria-label="Basic example">
        {counter > 1 && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => prev()}
          >
            Prev
          </button>
        )}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => next()}
        >
          Next
        </button>
      </div>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
