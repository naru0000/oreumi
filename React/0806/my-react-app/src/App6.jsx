// npm install react-router-dom
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function Product() {
  // url의 id를 가져옴
  const { id } = useParams();
  // fetch로 가져온 데이터를 저장할 상태
  const [data, setData] = useState(null);
  // 로딩중인지 아닌지 표시할 상태
  const [loading, setLoading] = useState(false);

  function handleClick() {
    // 버튼 누를때 로딩 시작
    setLoading(true);

    fetch(`https://dev.wenivops.co.kr/services/fastapi-crud/${id}/blog`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }

  return (
    <div>
      <h2>id: {id}</h2>
      <button onClick={handleClick}>데이터 가져오기</button>

      {loading && <div>로딩 중...</div>}
      {data && (
        <div>
          <p>썸네일 URL: {data.thumbnail}</p>
          {data.thumbnail && <img src={data.thumbnail} alt={data.title} />}
          <p>
            <strong>제목:</strong> {data.title || "제목 없음"}
          </p>
          <p>
            <strong>내용:</strong> {data.content || "내용 없음"}
          </p>
          <p>
            <strong>작성자:</strong> {data.author || "작성자 없음"}
          </p>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product/1">Product 1</Link>
          <Link to="/product/2">Product 2</Link>
          <Link to="/product/3">Product 3</Link>
          <Link to="/product/4">Product 4</Link>
          <Link to="/product/5">Product 5</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
