function solution(number) {
  var answer = 0;
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let a = j + 1; a < number.length; a++) {
        if (number[i] + number[j] + number[a] === 0) {
          count++;
        }
      }
    }
  }
  answer = count;
  return answer;
}
