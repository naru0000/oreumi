import { useState, useEffect } from "react";

function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("카운트 컴포넌트 마운트");

    // return () => {
    //   console.log("카운트 컴포넌트 언마운트")
    // }
  }, []);

  useEffect(() => {
    console.log(`카운트 상태 업데이트 : ${count}`);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click!</button>
      <button onClick={() => setCount(0)}>리셋</button>
      <p>카운트: {count}</p>
    </>
  );
}

export default Count;
