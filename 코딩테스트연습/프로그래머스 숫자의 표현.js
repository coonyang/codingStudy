function solution(n) {
  var answer = 0;

  for (let j = 1; j <= n / 2 + 1; j++) {
    let count = 0;
    for (let i = j; i <= n / 2 + 1; i++) {
      count += i;
      if (count === n) {
        answer++;
        break;
      }
      if (count > n) {
        break;
      }
    }
  }
  answer++;
  return answer;
}
