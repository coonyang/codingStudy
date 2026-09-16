function solution(m, n, board) {
  var answer = 0;

  // 1. m * n 만큼의 좌표를 나타냄
  // 2. m 중 연속으로 이어진 2개 이상의 문자를 찾고 같은 m 값의 n+1 위치에 있는 문자가 같은지 비교
  // 3. 지워진 곳의 위의 n값을 그만큼 낮추고 2로 반복

  while (true) {
    let remove = [];

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i + 1][j + 1] &&
          board[i][j] !== ""
        ) {
          remove.push([i, j]);
          remove.push([i, j + 1]);
          remove.push([i + 1, j]);
          remove.push([i + 1, j + 1]);
        }
      }
    }

    if (remove.length === 0) {
      break;
    }

    for (let [i, j] of remove) {
      if (board[i][j] === "") {
        continue;
      }
      board[i][j] = "";
      answer++;
    }

    for (let i = 0; i < n; i++) {
      let arr = [];

      for (let j = 0; j < m; j++) {
        if (board[j][i] !== "") {
          arr.push(board[j][i]);
        }
      }

      for (let j = m - 1; j >= 0; j--) {
        if (arr.length > 0) {
          board[j][i] = arr.pop();
        } else {
          board[j][i] = "";
        }
      }
    }
  }
  return answer;
}
