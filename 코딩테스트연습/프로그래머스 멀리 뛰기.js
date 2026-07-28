function solution(n) {
  var answer = 0;

  if (n === 1) {
    answer = 1;
  }
  if (n === 2) {
    answer = 2;
  }

  let a = Array(n + 1);

  a[1] = 1;
  a[2] = 2;

  for (let i = 3; i <= n; i++) {
    a[i] = (a[i - 1] + a[i - 2]) % 1234567;
  }
  answer = a[n];

  return answer;
}
