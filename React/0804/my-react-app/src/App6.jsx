import React from "react";

function Fruit(props) {
  return (
    <>
      <dt>{props.name}</dt>
      <dd>{props.desc}</dd>
    </>
  );
}

function App() {
  const items = [
    { id: 1, name: "Apple", desc: "빨간건 사과" },
    { id: 2, name: "Banana", desc: "바나나는 길어" },
    { id: 3, name: "Cherry", desc: "체리는 비싸" },
  ];

  return (
    <dl>
      {items.map((item) => (
        <Fruit key={item.id} name={item.name} desc={item.desc} />
      ))}
    </dl>
  );
}

export default App;
