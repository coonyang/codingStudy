function solution(numbers) {
  var answer = -1;

  answer = 45 - numbers.reduce((a, b) => a + b, 0);

  return answer;
}

// 다른 방법

function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) {
      // includes = 배열 안에 특정 값이 있으면 true 없으면 false
      answer += i;
    }
  }

  return answer;
}
