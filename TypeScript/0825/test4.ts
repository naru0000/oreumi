// 다음 요구사항에 맞는 제네릭 함수를 작성해보세요.

// 배열을 입력받아 첫 번째 요소를 반환하는 함수 getFirstElement<T>를 만드세요.
// 배열이 비어있으면 undefined 반환해야 합니다.
// 모든 타입의 배열에 대해 동작해야 합니다.

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// 다음 요구사항에 맞는 제네릭 인터페이스와 함수를 작성해보세요.

// Key와 Value를 저장할 수 있는 제네릭 인터페이스 Storage<K, V>를 만드세요.
// Storage 인터페이스를 구현하는 setItem과 getItem 함수를 작성하세요.
// setItem은 key와 value를 받아서 저장하고, getItem은 key를 받아서 해당 value를 반환합니다.
// 저장된 key가 없는 경우 getItem은 undefined를 반환해야 합니다.

interface Storage<K, V> {
  key: K;
  value: V;
}
