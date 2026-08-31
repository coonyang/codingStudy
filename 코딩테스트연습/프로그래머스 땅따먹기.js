function solution(land) {
  var answer = 0;

  let arr2 = [...land[0]];

  // 1. 첫 번째 땅을 밟으면 두 번째 땅의 같은 열을 밟으면 안됨
  // 2. 가장 큰 수를 찾아 밟고 그 땅이 같은 열이면 다른 열중 가장 큰 값을 밟게 함
  // 3. 2의 값을 각각 저장하여 가장 큰 수로 찾아감

  for (let i = 1; i < land.length; i++) {
    let arr4 = [...arr2];
    for (let j = 0; j < 4; j++) {
      let arr3 = [];
      for (let k = 0; k < 4; k++) {
        if (j !== k) {
          arr3.push(land[i][j] + arr4[k]);
        }
      }
      arr2[j] = Math.max(...arr3);
    }
  }
  answer = Math.max(...arr2);
  return answer;
}
