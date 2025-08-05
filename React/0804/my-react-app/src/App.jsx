import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>카운터{count}</h1>
      <button onClick={handleClick}>up</button>
    </>
  );
}

export default App;
