function solution(n) {
  var answer = 0;

  for (let i = 2; i <= n; i++) {
    let boolean = true;

    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        boolean = false;
        break;
      }
    }
    if (boolean) {
      answer++;
    }
  }
  return answer;
}
