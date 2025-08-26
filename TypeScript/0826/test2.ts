// TODO: Non-Null 단언을 사용하여 아래 코드를 완성하세요.
const $input = document.querySelector("input");
// $input의 value를 콘솔에 출력하세요.

const $safeInput = document.querySelector("input")!;

console.log($safeInput.value);

// TODO: 아래 JSON 데이터를 파싱하고 타입 단언을 사용하여
// name과 age를 안전하게 접근할 수 있도록 만드세요.
const data = '{"name": "Jane", "age": 25}';

interface User {
  name: string;
  age: number;
}

const user = JSON.parse(data) as User;

// TODO: 학생의 과목별 성적을 저장할 수 있는 인터페이스를 만드세요
// 학생의 이름은 필수이며, 나머지 과목들은 동적으로 추가될 수 있습니다

// 아래처럼 하니까 충돌이 났어요..
// interface Score {
//   name: string;
//   [key: string]: number;
// }

interface Student {
  name: string;
}

interface Score {
  [key: string]: number;
}

// TODO: Car 인터페이스의 속성 중 하나를 인자로 받아
// 해당 속성의 값을 반환하는 함수를 작성하세요.

interface Car {
  brand: string;
  model: string;
  year: number;
}

function getCarValue(product: Car, key: keyof Car) {
  return product[key];
}
