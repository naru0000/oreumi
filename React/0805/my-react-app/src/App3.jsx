import data from "./data";

function App() {
  console.log(data);
  return (
    <>
      <h1>book list</h1>
      <label htmlFor="search">Search:</label>
      {data.map((book, index) => {
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
