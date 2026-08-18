function solution(maps) {
  var answer = 0;

  let queue = [[0, 0]];
  let distance = Array.from({ length: maps.length }, () =>
    Array(maps[0].length).fill(0),
  );

  distance[0][0] = 1;

  while (queue.length) {
    let [x, y] = queue.shift();

    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (maps[nx][ny] === 1 && distance[nx][ny] === 0) {
        queue.push([nx, ny]);
      }
    }
  }
  return answer;
}
