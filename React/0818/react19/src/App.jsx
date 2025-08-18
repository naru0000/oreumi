import { use, Suspense, useState } from "react";

function fetchTodo(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todos = {
        1: { id: 1, title: "리액트 공부하기", done: false },
        2: { id: 2, title: "운동하기", done: true },
        3: { id: 3, title: "책 읽기", done: false },
      };
      resolve(todos[id]);
    }, 1000);
  });
}

function Todo({ todoPromise }) {
  const todo = use(todoPromise);

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>상태: {todo.done ? "완료" : "미완료"}</p>
    </div>
  );
}

function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [todoPromise, setTodoPromise] = useState(null);

  const handleUserSelect = (todoId) => {
    setSelectedTodo(todoId);
    setTodoPromise(fetchTodo(todoId));
  };

  return (
    <div>
      <h2>할 일 앱</h2>
      <button onClick={() => handleUserSelect(1)}>할 일 1</button>
      <button onClick={() => handleUserSelect(2)}>할 일 2</button>
      <button onClick={() => handleUserSelect(3)}>할 일 3</button>

      <div>
        <p>선택된 Todo: {selectedTodo || "없음"}</p>
      </div>

      {todoPromise ? (
        <Suspense fallback={<div>⏳ 로딩 중...</div>}>
          <Todo todoPromise={todoPromise} />
        </Suspense>
      ) : (
        <div>
          <p>👆 위의 '할 일' 버튼을 클릭해주세요!</p>
        </div>
      )}
    </div>
  );
}

export default App;
