function solution(brown, yellow) {
  var answer = [];

  for (let i = 3; i < brown; i++) {
    if (((i - 2) * (brown - i * 2)) / 2 === yellow) {
      answer.push(i, (brown - i * 2) / 2 + 2);
    }
  }

  return answer;
}
