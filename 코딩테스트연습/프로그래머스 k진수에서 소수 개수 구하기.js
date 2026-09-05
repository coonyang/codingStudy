function solution(n, k) {
  var answer = 0;

  // 1. n을 k진수로 바꿈
  // 2. 0을 기준으로 1을 나눔
  // 3. 나눈 것들이 소수인지 아닌지 판단하여 answer++ 시킴

  let a = n.toString(k);

  let arr = a.split("0").map(Number);

  for (let s of arr) {
    if (s < 2) continue;
    let bool = true;
    for (let i = 2; i < s; i++) {
      if (s % i === 0) {
        bool = false;
        break;
      }
    }
    if (bool) {
      answer++;
    }
  }

  return answer;
}
