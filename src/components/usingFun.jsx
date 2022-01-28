import React, { useState } from "react";

function UsingFun() {
  const [state, setState] = useState(0);

  function increase() {
    setState(state + 1);
  }

  function decrease() {
    setState(state - 1);
  }

  return (
    <div className="box">
      <h2>Using Functional Component</h2>
      <hr></hr>
      <h1>{state}</h1>
      <button onClick={decrease}>Decrement</button>
      <button onClick={increase}>Increment</button>
    </div>
  );
}

export default UsingFun;
