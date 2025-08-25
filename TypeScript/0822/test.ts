// 기본 타입 지정하기

// 여기에 알맞은 타입을 지정하세요
let userName: string = "김개발";
let userAge: number = 25;
let isStudent: boolean = true;
let numbers: number[] = [1, 2, 3, 4, 5];
let tuple: [string, number] = ["typescript", 100];

// 타입 추론 이해하기

let value = "Hello";
value = "42";

let numbers2 = [1, 2, 3];
numbers2.push(4);

let mixed: (number | string)[] = [1, "two", 3];
mixed.push(5);

// 위의 경우는 튜플로 이렇게 해도 되나요?
// let mixed2: [number, string, number] = [1, "two", 3];
// mixed.push(5);

//  void와 never 이해하기

// 적절한 반환 타입을 지정하세요
function logMessage(message: string): void {
  console.log(message);
}

function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    console.log("무한 루프");
  }
}

const fruits: string[] = ["apple", "banana", "cherry"];

fruits.forEach((x) => console.log(x));
