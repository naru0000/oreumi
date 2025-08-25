// 다음 조건을 만족하는 타입을 정의해보세요.

// 1.사용자 정보를 담는 User 타입
// 필수 속성: id(숫자), name(문자열)
// 선택적 속성: email(문자열)
// id는 읽기전용으로 설정

// 2.다음 두 타입을 정의하고 인터섹션 타입을 만들어보세요.

// Product: name(문자열), price(숫자) 속성
// Discount: discountRate(숫자) 속성
// DiscountedProduct: 위 두 타입의 인터섹션

type User = {
  readonly id: number;
  name: string;
  email?: string;
};

type Product = {
  name: string;
  price: number;
};

type Discount = {
  discountRate: number;
};

type DiscountedProduct = Product & Discount;

function printUser(user: User) {
  console.log(`ID: ${user.id}, Name: ${user.name}`);
  if (user.email) {
    console.log(`email: ${user.email}`);
  }
}
