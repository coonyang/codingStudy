function solution(strings, n) {
  var answer = [];

  strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b); // 문자열을 사전순으로 비교해주는 함수
    }
    a[n].localeCompare(b[n]);
  });

  return answer;
}
