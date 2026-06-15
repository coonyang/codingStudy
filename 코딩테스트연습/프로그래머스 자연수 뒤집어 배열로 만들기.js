function solution(n) {
  var answer = [];
  var arr = String(n).split("").reverse();
  for (let i of arr) {
    answer.push(Number(i));
  }

  return answer;
}

// 다른 정답

function solution(n) {
  return String(n).split("").reverse().map(Number);
}
// map(Number) = map() 메서드에 Number 함수를 집어넣으면 배열 안의 모든 문자가 숫자로 변환된 새 배열을 만들어줌
