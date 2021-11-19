import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClickIncrement = () => {
    setCounter(counter + 1); // Update counter during next render
  };

  const handleClickDecrement = () => {
    setCounter(counter - 1); // Update counter during next render
  };

  return (
    <div>
      <h1>Counter state value: {counter}</h1>

      <button onClick={handleClickIncrement}>Increment</button>
      <button onClick={handleClickDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
