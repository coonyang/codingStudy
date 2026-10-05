function solution(maps) {
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  function bfs(startX, startY, target) {
    let queue = [[startX, startY, 0]];

    let visited = Array.from({ length: maps.length }, () =>
      new Array(maps[0].length).fill(false),
    );

    visited[startX][startY] = true;

    while (queue.length > 0) {
      let [x, y, distance] = queue.shift();

      if (maps[x][y] === target) {
        return distance;
      }

      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (nx < 0 || nx >= maps.length || ny < 0 || ny >= maps[0].length) {
          continue;
        }

        if (maps[nx][ny] === "X") {
          continue;
        }

        if (visited[nx][ny]) {
          continue;
        }

        visited[nx][ny] = true;
        queue.push([nx, ny, distance + 1]);
      }
    }

    return -1;
  }

  // S 위치 찾기
  let startX;
  let startY;

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === "S") {
        startX = i;
        startY = j;
      }
    }
  }

  // S → L
  let toLever = bfs(startX, startY, "L");

  if (toLever === -1) {
    return -1;
  }

  // L 위치 찾기
  let leverX;
  let leverY;

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === "L") {
        leverX = i;
        leverY = j;
      }
    }
  }

  // L → E
  let toExit = bfs(leverX, leverY, "E");

  if (toExit === -1) {
    return -1;
  }

  return toLever + toExit;
}
