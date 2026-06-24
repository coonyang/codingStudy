function solution(a, b, n) {
  var answer = 0;

  let 남은병 = n;
  let 받은병 = 0;

  while (남은병 >= a) {
    받은병 = Math.floor(남은병 / a) * b;
    answer += 받은병;
    남은병 = (남은병 % a) + 받은병;
  }

  return answer;
}
