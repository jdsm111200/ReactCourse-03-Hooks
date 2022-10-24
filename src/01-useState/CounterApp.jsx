import { useState } from "react";

export const CounterApp = () => {
  //al usar el useState, literalmente se sobreescribe todo lo que le pandemos, para mantener el estado anterior, se usa el spread operator
  const [counter, setCounter] = useState([
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
  ]);

  const onAdd = (e, index) => {
    console.log(e, index);
    let newArray = [...counter];
    newArray[index].value++;
    setCounter(newArray);
  };

  return (
    <>
      {counter.map((c, index) => (
        <div key={c.id}>
          <h1>
            Counter {c.id}: {c.value}
          </h1>
          <hr />
          <button className="btn btn-primary" onClick={(e) => onAdd(e, index)}>
            +1
          </button>
        </div>
      ))}
    </>
  );
};
