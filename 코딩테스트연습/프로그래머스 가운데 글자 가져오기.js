function solution(s) {
  var answer = "";
  let a = s.length / 2;
  if (s.length % 2 == 0) {
    answer = s[a - 1] + s[a];
  } else {
    answer = s[Math.floor(a)];
  }

  return answer;
}
