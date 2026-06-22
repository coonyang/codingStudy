function solution(s) {
  var answer = "";
  let i = 0;
  for (let char of s) {
    if (char === " ") {
      i = 0;
    }
    if (i % 2 === 0) {
      answer += char.toUpperCase();
      i++;
    } else {
      answer += char.toLowerCase();
      i++;
    }
  }

  return answer;
}
