function solution(strings, n) {
  var answer = [];

  strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b);
    }
    a[n].localeCompare(b[n]);
  });

  return answer;
}
