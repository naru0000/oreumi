import { useState, useEffect } from "react";
import { useScrollObserver } from "./Hooks/useScrollObserver";

function ImageList() {
  // 1. 페이지 번호 관리하기
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  // 경현님거 봤읍니다 지성합니다 안하면 계속 api가 호출되는건 알았어요
  const [loading, setLoading] = useState(false);

  // 2. 바닥 감지했을때 반응하기
  const isBottom = useScrollObserver();

  // 바닥에 도달하고 로딩중이 아닐때만 데이터가 나온다

  useEffect(() => {
    if (isBottom && !loading) {
      setPage(page + 1);
      fetchData(page);
    }
  }, [isBottom]);

  // 3. 기존 데이터에 새 데이터 추가하기

  const fetchData = async (pageNum) => {
    try {
      setLoading(true);
      const response = await fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=5`);
      const result = await response.json();

      if (page === 1) {
        setData(result);
      } else {
        setData((prev) => [...prev, ...result]);
      }

      // 4. 페이지 번호 업데이트
      // setPage(pageNum);
    } catch (error) {
      console.error("데이터 못 가져 왔다", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ul>
        {data.map((image) => (
          <li key={image.id}>
            <img src={image.download_url} width={500} />
          </li>
        ))}
        {loading && <div>로딩 중..</div>}
      </ul>
    </>
  );
}

function App() {
  return (
    <div>
      <ImageList />
    </div>
  );
}

export default App;
