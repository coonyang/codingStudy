function solution(s) {
  var answer = 0;

  let count = 1;
  let count2 = 0;
  let a = s[0];

  for (let i = 1; i < s.length; i++) {
    if (a === s[i]) {
      count++;
    }
    if (a !== s[i]) {
      count2++;
    }
    if (count === count2) {
      answer++;

      if (i + 1 < s.length) {
        a = s[i + 1];
        count = 1;
        count2 = 0;
        i++;
      }
    }
  }

  if (count > 0) {
    answer++;
  }

  return answer;
}
