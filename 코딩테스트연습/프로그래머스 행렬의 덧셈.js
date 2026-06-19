function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    answer.push([]);
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      let a = arr1[i][j] + arr2[i][j];
      answer[i].push(a);
    }
  }

  return answer;
}

// 다른 정답

function solution(arr1, arr2) {
  return arr1.map((row, i) => row.map((num, j) => num + arr2[i][j]));
}
