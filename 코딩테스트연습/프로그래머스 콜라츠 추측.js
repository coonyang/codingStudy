function solution(num) {
  var answer = 0;
  if (num === 1) {
    return 0;
  }
  for (let i = 1; i <= 500; i++) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    if (num === 1) {
      answer = i;
      return answer;
    }
  }
  return -1;
}

// 다른 정답
function solution(num) {
  let count = 0;

  while (num !== 1 && count < 500) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    count++;
  }

  return num === 1 ? count : -1;
}
