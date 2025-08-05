import { useState } from "react";
import data from "./data";

function App() {
  // useState 세팅
  const [searchKeyword, setSearchKeyword] = useState("");

  // 필터 세팅
  const filterData = data.filter((book) =>
    book.title.replace(" ", "").toLowerCase().includes(searchKeyword.toLowerCase().replace(" ", ""))
  );

  // 상태변화값에 input값 넣기
  const onChangeSearchQuery = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <>
      <h1>book list</h1>
      <label htmlFor="search">Search:</label>
      <input type="text" value={searchKeyword} id="search" onChange={onChangeSearchQuery} />
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
