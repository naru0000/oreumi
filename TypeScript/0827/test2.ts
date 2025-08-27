// ### 5. Partial, Pick, Omit 활용 - 사용자 업데이트
// 사용자 정보를 부분적으로 업데이트하는 함수들을 만드세요.

interface FullUser {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
  createdAt: Date;
}

// 1. 사용자 생성시 필요한 정보만 받는 타입 (id, createdAt 제외)
type CreateUserData = Omit<FullUser, "id" | "createdAt">;

// 2. 사용자 업데이트시 부분적으로 수정 가능한 타입 (id 제외)
type UpdateUserData = Partial<Omit<FullUser, "id">>;

// 3. 공개 프로필용 타입 (password 제외)
type PublicUser = Omit<FullUser, "password">;

// 4. 로그인 정보만 담는 타입
type LoginData = Pick<FullUser, "id" | "password">;

// 함수들을 구현하세요
function createUser(userData: CreateUserData): FullUser {
  const result: FullUser = {
    ...userData,
    id: Math.floor(Math.random() * 1000),
    createdAt: new Date(),
  };
  return result;
}

function getPublicProfile(user: FullUser): PublicUser {
  const { password, ...publicUser } = user;
  return publicUser;
}

// ### 6. 타입 가드 - 동물 구분하기
// 다양한 동물 타입을 구분하는 타입 가드를 만드세요.

interface Dog {
  type: "dog";
  name: string;
  breed: string;
  bark(): void;
}

interface Cat {
  type: "cat";
  name: string;
  color: string;
  meow(): void;
}

interface Bird {
  type: "bird";
  name: string;
  canFly: boolean;
  chirp(): void;
}

type Animal = Dog | Cat | Bird;

// 타입 가드 함수들을 구현하세요
function isDog(animal: Animal): animal is Dog {
  return animal.type === "dog";
}

function isCat(animal: Animal): animal is Cat {
  return animal.type === "cat";
}

function isBird(animal: Animal): animal is Bird {
  return animal.type === "bird";
}

// 동물의 소리를 내는 함수를 구현하세요
function makeSound(animal: Animal): void {}

// 사용 예시
const dog: Dog = { type: "dog", name: "멍멍이", breed: "골든리트리버", bark: () => console.log("멍멍!") };
const cat: Cat = { type: "cat", name: "야옹이", color: "검정", meow: () => console.log("야옹!") };
const bird: Bird = { type: "bird", name: "짹짹이", canFly: true, chirp: () => console.log("짹짹!") };

makeSound(dog); // 멍멍!
makeSound(cat); // 야옹!
makeSound(bird); // 짹짹!
