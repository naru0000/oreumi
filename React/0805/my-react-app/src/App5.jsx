import data from "./data.jsx";
import { useState } from "react";

function App() {
  // console.log(data);

  const [inputValue, setInputValue] = useState("");
  const filterData = data.filter((book) => book.title.includes(inputValue));

  return (
    <>
      <h1>Book List</h1>
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      {filterData.map((book, index) => {
        return (
          <section key={index}>
            <h2>{book.title}</h2>
            <p>{book.description}</p>
          </section>
        );
      })}
    </>
  );
}

export default App;
