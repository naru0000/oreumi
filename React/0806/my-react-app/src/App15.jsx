import { useRef } from "react";

function App() {
  // DOM 요소 참조용 useRef
  const inputRef = useRef(null);

  function handleClick() {
    // input 요소의 현재 값 가져오기
    const inputValue = inputRef.current.value;
    console.log(inputValue);
    console.log(inputRef.current);
    // input 요소의 값을 변경하기
    // inputRef.current.value = "새로운 값";
    // input 요소에 포커스 주기
    // inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>눌러!!</button>
    </div>
  );
}

export default App;
