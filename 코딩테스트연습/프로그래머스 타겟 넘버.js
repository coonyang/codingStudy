function solution(numbers, target) {
  var answer = 0;

  function a(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    a(index + 1, sum + numbers[index]);
    a(index + 1, sum - numbers[index]);
  }

  a(0, 0);

  return answer;
}
