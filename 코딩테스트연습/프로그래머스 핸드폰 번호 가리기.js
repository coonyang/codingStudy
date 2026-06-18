function solution(phone_number) {
  var answer = "";

  let i = "*".repeat(phone_number.length - 4);

  let j = phone_number.slice(-4);

  answer = i + j;
  return answer;
}
