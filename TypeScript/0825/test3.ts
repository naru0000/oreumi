// 1.타입을 지정하세요*
let book = {
  title: "TypeScript 입문",
  author: "홍길동",
  pages: 300,
  isAvailable: true,
};

// ------------------------

type Book = {
  title: string;
  author: string;
  pages: number;
  isAvailable: boolean;
};

// 2.User 인터페이스를 정의하세요

let user: User = {
  name: "이영희",
  email: "lee@emial.com",
  age: 25,
};

// ------------------------

interface User {
  name: string;
  email: string;
  age: number;
}

// 3. 다음 요구사항에 맞는 함수를 작성하세요

// 함수명: getInfo
// 매개변수: name(문자열), age(숫자),  isStudent(불리언,선택자)
// 반환값: {name: string, age: number, status, string}형태의 객체
// status는 isStudent가 trune면 학생, false나 없으면 일반

interface User {
  name: string;
  age: number;
  isStudent?: boolean;
}

function getInfo(user: User) {
  return {};
}
