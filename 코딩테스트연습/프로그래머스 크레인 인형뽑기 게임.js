function solution(board, moves) {
  var answer = 0;

  let arr = [];

  for (let a of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][a - 1] !== 0) {
        arr.push(board[i][a]);
        board[i][a - 1] = 0;
        break;
      }
    }
    if (arr.length > 1) {
      if (arr[arr.length - 1] === arr[arr.length - 2]) {
        arr.pop();
        arr.pop();
        answer += 2;
      }
    }
  }

  return answer;
}
