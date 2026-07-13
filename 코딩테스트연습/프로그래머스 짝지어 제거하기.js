function solution(s) {
  var answer = -1;
  let arr = [];

  for (let a of s) {
    arr.push(a);
    if (arr.length >= 2) {
      if (arr[arr.length - 1] === arr[arr.length - 2]) {
        arr.pop();
        arr.pop();
      }
    }
  }

  if (arr.length === 0) {
    answer = 1;
  } else {
    answer = 0;
  }
  return answer;
}
