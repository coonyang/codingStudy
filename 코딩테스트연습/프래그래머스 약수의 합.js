function solution(n) {
  var answer = 0;
  var arr = [];
  if (n == 0) {
    return 0;
  }
  for (let i = 1; i < n + 1; i++) {
    if (n % i == 0) {
      arr.push(i);
    }
  }
  for (let a of arr) {
    answer = answer + a;
  }
  return answer;
}
