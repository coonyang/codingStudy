function solution(progresses, speeds) {
  var answer = [];

  let arr = [];

  for (let i = 0; i < speeds.length; i++) {
    let count = 0;
    while (progresses[i] < 100) {
      progresses[i] += speeds[i];
      count++;
    }
    arr.push(count);
  }

  let max = arr[0];
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= max) {
      count++;
    } else {
      answer.push(count);
      max = arr[i];
      count = 1;
    }
  }

  return answer;
}
