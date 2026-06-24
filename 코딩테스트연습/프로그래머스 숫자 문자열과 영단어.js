function solution(s) {
  var answer = 0;

  const nums = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  for (let key in nums) {
    s = s.replaceAll(key, nums[key]);
  }
  answer = Number(s);
  return answer;
}
// 문자열.replaceAll(찾을값, 바꿀값) = 문자열에서 특정 문자를 전부 바꿔주는 함수
// 일반 replace(찾을값, 바꿀값) = 첫번째 값만 바뀜
