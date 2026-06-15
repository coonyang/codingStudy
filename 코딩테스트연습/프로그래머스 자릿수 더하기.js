function solution(n) {
  var answer = 0;
  var str = String(n);

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.   // 이건 왜있는지 모르겠어서 그냥 냅둠
  console.log("Hello Javascript");

  for (let a of str) {
    answer = answer + a;
  }

  return answer;
}

// 다른 정답

function solution(n) {
  return String(n)
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);
}
// String() = 숫자를 문자열로 변환
// split() = 각 글자를 쪼개 배열로 만들어줌
// reduce() = 배열의 모든 요소를 숫자로 바꿔 합산
