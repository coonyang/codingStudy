function solution(n, m, section) {
  var answer = 0;

  let 칠한곳 = 0;

  for (let a of section) {
    if (a > 칠한곳) {
      answer++;
      칠한곳 = a + m - 1;
    }
  }

  return answer;
}
