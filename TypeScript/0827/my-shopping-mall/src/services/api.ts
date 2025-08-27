import type { Product } from "../types/index";

// API fetch => 데이터 불러오기(get 요청)
// 함수 이름 : fetchAllProducts
// 성공 응답(받아온 데이터 리턴하기) / 실패 응답 처리(에러 메세지는 자유)
// 함수의 리턴 타입 정의

export async function fetchAllProducts() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`HTTP ERROR : statue ${response.status}`);
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error(`오류 발생`, error);
  }
}

const BASE_URL = "https://dev.wenivops.co.kr/services/fastapi-crud/1/product";
