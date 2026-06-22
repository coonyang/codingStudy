function solution(sizes) {
  var answer = 0;
  let 가로 = 0;
  let 세로 = 0;
  for (let arr of sizes) {
    arr.sort((a, b) => a - b);
  }

  for (let i = 0; i < sizes.length; i++) {
    가로 = Math.max(가로, sizes[i][0]);
    세로 = Math.max(세로, sizes[i][1]);
  }

  answer = 가로 * 세로;
  return answer;
}
