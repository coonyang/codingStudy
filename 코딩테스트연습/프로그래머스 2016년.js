function solution(a, b) {
  var answer = "";

  const 월 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let 일 = 0;

  for (let i = 0; i < a - 1; i++) {
    일 += 월[i];
  }

  일 += b - 1;

  const 요일 = ["금", "토", "일", "월", "화", "수", "목"];

  answer = 요일[일 % 7];

  return answer;
}
