import { useState, useEffect } from "react";

export function useScrollThrottle() {
  const [isBottom, setIsBottom] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsBottom(
        window.innerHeight + document.documentElement.scrollTop + 10 >= document.documentElement.offsetHeight
      );
      console.log("scrolling...");
    });
  }, []);

  return isBottom;
}

function throttle(func, delay) {
  // 여기에 시간 체크 로직
  // 조건 맞으면 func() 실행
}
