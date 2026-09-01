// 1. n진법으로 만든 숫자들을 이어붙임
// 2. t * m + p 만큼의 길이
// 3. t번 반복하여 p부터 시작하여 m의 배수번째에 있는 수를 찾음

function solution(n, t, m, p) {
  var answer = "";

  let str = "";

  for (let i = 0; str.length < t * m; i++) {
    str += i.toString(n);
  }

  for (let i = p - 1; i < str.length; i += m) {
    answer += str[i];

    if (answer.length === t) break;
  }

  return answer.toUpperCase();
}
