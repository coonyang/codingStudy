function solution(s) {
  var answer = "";
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    let a = s[i].charCodeAt(0);
    arr.push(a);
  }

  arr.sort((a, b) => b - a);
  answer = String.fromCharCode(...arr);

  return answer;
}

// 다른 정답
function solution(s) {
  return s.split("").sort().reverse().join("");
}
// 문자열 정렬은 이미 유니코드 순서를 따르기 때문에 굳이 아스키 코드로 변환 안해도 됨..
