function solution(absolutes, signs) {
  var answer = 123456789;
  var list = [];
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      list.push(absolutes[i]);
    } else {
      list.push(-absolutes[i]);
    }
  }
  answer = list.reduce((a, b) => a + b);
  return answer;
}
