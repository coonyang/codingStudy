function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[i + j]) {
        answer.push(numbers[i + j]);
        break;
      } else {
        if (j === numbers.length - 1) {
          answer.push(-1);
        }
      }
    }
  }

  answer.push(-1);
  return answer;
}
