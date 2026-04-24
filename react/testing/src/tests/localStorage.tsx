import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("counter");
    return saved !== null ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("counter", count.toString());
  }, [count]);

  return (
    <div>
      <h2 data-testid="count-id">Count: {count}</h2>
      <button data-testid="inc-id" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button data-testid="dec-id" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
};

export default App;
