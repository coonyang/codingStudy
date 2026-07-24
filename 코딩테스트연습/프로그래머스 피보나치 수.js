function solution(n) {
  var answer = 0;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  answer = b;
  return answer;
}
