function solution(s) {
  var answer = true;

  let i = 0;

  for (var a of s) {
    if (a === "(") {
      i = i + 1;
    } else {
      i = i - 1;

      if (i < 0) {
        return false;
      }
    }
  }

  return answer;
}
