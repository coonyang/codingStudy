function solution(numbers) {
  var answer = "";

  // 1. 두 숫자를 붙여보고 더 큰 쪽을 앞에 배치
  // 2. 그렇게 반복해서 문자열 완성

  numbers = numbers.map((x) => x.toString());

  numbers.sort((a, b) => {
    return b + a - (a + b);
  });

  for (let x of numbers) {
    answer += x;
  }

  return answer[0] === "0" ? "0" : answer;
}
