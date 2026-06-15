function solution(n) {
  var answer = 0;
  var x = Math.sqrt(n);
  if (Number.isInteger(x)) {
    answer = (x + 1) ** 2;
  } else {
    answer = -1;
  }
  return answer;
}

// Math.sqrt() = 제곱근을 구해주는 함수 ex) Math.sqrt(16) = 4
// Number.isInteger() = 소수인지 판별해주는 함수 // 소수면 false
