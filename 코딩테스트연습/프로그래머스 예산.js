function solution(d, budget) {
  var answer = 0;

  d.sort((a, b) => a - b);

  for (let i = 1; i <= d.length; i++) {
    if (d.slice(0, i).reduce((a, b) => a + b, 0) <= budget) {
      answer = i;
    }
  }

  return answer;
}
