function solution(arrayA, arrayB) {
  var answer = 0;

  // 1. A만 나눠지고 B는 나눠지지 않는 수 구하기
  // 2. B만 나눠지고 A는 나눠지지 않는 수 구하기
  // 여기서 나누는 최댓값은 각 어레이의 가장 작은 수를 넘어가지 않도록 함(넘어가면 0)
  // 3. 둘 중 큰 값을 리턴함

  let arr = [];
  for (let i = 1; i <= Math.min(...arrayA); i++) {
    if (arrayA.every((x) => x % i === 0)) {
      arr.push(i);
    }
  }
  let max = Math.max(
    ...arr.filter((n) => {
      return !arrayB.some((x) => x % n === 0);
    }),
  );

  let arr2 = [];
  for (let i = 1; i <= Math.min(...arrayB); i++) {
    if (arrayB.every((x) => x % i === 0)) {
      arr2.push(i);
    }
  }
  let max2 = Math.max(
    ...arr2.filter((n) => {
      return !arrayA.some((x) => x % n === 0);
    }),
  );

  answer = Math.max(max, max2);
  return answer;
}
