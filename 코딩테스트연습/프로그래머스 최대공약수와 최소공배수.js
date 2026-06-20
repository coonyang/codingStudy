function solution(n, m) {
  var answer = [];
  let a = 0;
  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) {
      a = i;
    }
  }

  answer.push(a, (n * m) / a);

  return answer;
}
