function solution(s) {
  var answer = true;

  if (s.length == 4 || s.length == 6) {
    if (/^\d+$/.test(s)) {
      answer = true;
    } else {
      answer = false;
    }
  } else {
    answer = false;
  }

  return answer;
}
// 처음부터 끝까지 숫자만 있는 문자열인지 확인해주는 /^\d+$/ 정규식 객체를 만드는 문법
