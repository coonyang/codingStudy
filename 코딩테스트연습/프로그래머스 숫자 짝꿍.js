function solution(X, Y) {
  var answer = "";

  let countX = Array(10).fill(0);
  let countY = Array(10).fill(0);

  for (let a of X) {
    countX[a]++;
  }
  for (let a of Y) {
    countY[a]++;
  }

  for (let i = 9; i >= 0; i--) {
    let 개수 = Math.min(countX[i], countY[i]);

    while (개수 > 0) {
      answer += i;
      개수--;
    }
  }
  if (answer === "") return "-1";
  if (answer[0] === "0") return "0";
  return answer;
}
