function solution(answers) {
  var answer = [];

  let a = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let arr = [];
  for (let j = 0; j < a.length; j++) {
    let count = 0;

    for (let i = 0; i < answers.length; i++) {
      if (a[j][i % a[j].length] === answers[i]) {
        count++;
      }
    }
    arr.push(count);
  }

  최고점 = Math.max(...arr);
  for (let i = 0; i < a.length; i++) {
    if (arr[i] === 최고점) {
      answer.push(i + 1);
    }
  }

  return answer;
}
