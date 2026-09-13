function solution(n) {
  var answer = 0;

  // 피보나치 수열 문제
  // f[i] = f[i-1] + f[i-2]

  let f = new Array(n + 1).fill(0);

  f[1] = 1;
  f[2] = 2;
  for (let i = 3; i <= n; i++) {
    f[i] = (f[i - 1] + f[i - 2]) % 1000000007;
  }

  return answer;
}
