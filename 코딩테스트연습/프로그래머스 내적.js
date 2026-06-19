function solution(a, b) {
  var answer = 1234567890;
  var arr = [];
  for (let i = 0; i < a.length; i++) {
    let j = a[i] * b[i];
    arr.push(j);
  }

  answer = arr.reduce((a, b) => a + b, 0);
  return answer;
}
