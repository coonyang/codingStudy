function solution(arr1, arr2) {
  var answer = [[]];

  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr2.length; k++) {
      let a = 0;
      for (let j = 0; j < arr1[i].length; j++) {
        let count = arr1[i][j] * arr2[j][k];
        a += count;
      }
      answer[i].push(a);
    }
  }

  return answer;
}
