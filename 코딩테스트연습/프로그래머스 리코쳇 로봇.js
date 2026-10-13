function solution(board) {
  var answer = 0;

  // 1. 상하좌우 방향 설정
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  let n = board.length;
  let m = board[0].length;

  // 2. R의 위치 찾기
  let startX = 0;
  let startY = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === "R") {
        startX = i;
        startY = j;
      }
    }
  }

  // 3. BFS에 사용할 큐와 방문 배열
  let queue = [[startX, startY, 0]];
  let visited = Array.from({ length: n }, () => Array(m).fill(false));

  visited[startX][startY] = true;

  let head = 0;

  while (head < queue.length) {
    let [x, y, count] = queue[head++];

    // 4. G에 도착했는지 확인
    if (board[x][y] === "G") {
      return count;
    }

    // 5. 상하좌우로 미끄러지기
    for (let i = 0; i < 4; i++) {
      let nx = x;
      let ny = y;

      while (true) {
        let nextX = nx + dx[i];
        let nextY = ny + dy[i];

        // 게임판 밖으로 나가면 정지
        if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) {
          break;
        }

        // 장애물을 만나면 정지
        if (board[nextX][nextY] === "D") {
          break;
        }

        // 이동 가능한 칸이면 계속 이동
        nx = nextX;
        ny = nextY;
      }

      // 6. 멈춘 위치를 처음 방문했다면 큐에 추가
      if (!visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, count + 1]);
      }
    }
  }

  // 7. G에 도착할 수 없는 경우
  return -1;
}
