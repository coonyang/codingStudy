function solution(x) {
  var answer = true;
  var 자릿수합 = String(x)
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  if (x % 자릿수합 === 0) {
    return answer;
  } else {
    return false;
  }
}
