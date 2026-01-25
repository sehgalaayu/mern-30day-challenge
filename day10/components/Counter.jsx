import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increament() {
    setCount(count + 1);
  }
  function decreament() {
    setCount(count - 1);
  }

  return (
    <div>
      <input type="text" value={count} />
      <button onClick={increament}>Increment</button>
      <button onClick={decreament}>Decrement</button>
    </div>
  );
}
