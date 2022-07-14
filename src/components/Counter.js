import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
  
    setCount((CurrentCount) => CurrentCount + 1);
    setCount((CurrentCount) => CurrentCount + 1);
    console.log(count);
   
  }

  return <div onClick={increment}>{count}</div>;
}

export default Counter;
