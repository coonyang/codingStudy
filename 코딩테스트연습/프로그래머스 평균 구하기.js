function solution(arr) {
  var answer = 0;
  var a = arr.reduce((a, b) => a + b, 0);
  answer = a / arr.length;
  return answer;
}
