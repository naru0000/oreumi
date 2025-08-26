// 2.1
// 아래 인터페이스를 기반으로 유틸리티 타입을 활용해보세요.
// id 제외하는 interface를 만들어주세요.
// 모든 필드가 선택적이 되는 interface를 만들어주세요.
// id, name, price만 포함이 되는 interface를 만들어주세요.

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
}

type omitProduct = Omit<Product, "id">;

type partProduct = Partial<Product>;

type pictProduct = Pick<Product, "id" | "name" | "price">;

// 2.2
// 아래 인터페이스 기반으로 다음과 같은 맵드 타입을 구현해보세요.
// 모든 속성을 읽기 전용으로 만드는 Readonly<T> 구현
// 모든 속성을 필수로 만드는 Required<T> 구현

interface Product2 {
  id: number;
  name: string;
  price: number;
  description?: string;
  category?: string;
}

type Optional<T> = {
  readonly [P in keyof T]-?: T[P];
};

type OptionalProduct = Optional<Product2>;
