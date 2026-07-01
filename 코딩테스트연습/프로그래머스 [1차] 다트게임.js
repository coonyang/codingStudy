function solution(dartResult) {
  var answer = 0;
  let count = [];
  let arr = dartResult.match(/\d+|[A-Z]|[*#]/g);

  for (let i = 0; i < arr.length; i++) {
    if (/\d/.test(arr[i])) {
      num = Number(arr[i]);
    } else if (arr[i] === "*") {
      if (count.length === 1) {
        count[0] *= 2;
      } else {
        count[count.length - 1] *= 2;
        count[count.length - 2] *= 2;
      }
    } else if (arr[i] === "#") {
      count[count.length - 1] *= -1;
    } else {
      if (arr[i] === "S") {
        count.push(num);
      }
      if (arr[i] === "D") {
        count.push(num ** 2);
      }
      if (arr[i] === "T") {
        count.push(num ** 3);
      }
    }
  }
  answer = count.reduce((a, b) => a + b, 0);
  return answer;
}
