function solution(s) {
  var answer = "";

  let arr = s.split(" ").map(Number);

  let min = arr[0];
  let max = arr[0];

  for (let a of arr) {
    if (min > a) {
      min = a;
    }
    if (max < a) {
      max = a;
    }
  }
  answer = min + " " + max;
  return answer;
}
