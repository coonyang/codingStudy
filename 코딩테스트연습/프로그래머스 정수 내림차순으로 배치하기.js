function solution(n) {
  var answer = 0;
  answer = String(n)
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("");
  answer = Number(answer);
  return answer;
}
