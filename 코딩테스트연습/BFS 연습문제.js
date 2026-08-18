// 문제 1. 미로 탈출
// 다음과 같은 맵이 있다.

// S 1 1 0
// 0 1 1 0
// 0 0 1 1
// 0 0 0 E
// S = 시작점
// E = 도착점
// 1 = 이동 가능
// 0 = 이동 불가능
// 상/하/좌/우로만 이동 가능
// 한 칸 이동할 때마다 거리 +1

// 목표: S에서 E까지 가는 최소 이동 횟수를 구해라.

function a() {
  let q = [[0, 0]];

  let map = [
    [1, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 1],
    [0, 0, 0, 1],
  ];

  let distance = Array.from({ length: 4 }, () => {
    return Array(4).fill(0);
  });

  distance[0][0] = 1;

  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  while (q.length) {
    let [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (map[nx][ny] === 1 && distance[nx][ny] === 0) {
        q.push([nx, ny]);
        distance[nx][ny] = distance[x][y] + 1;
      }
    }
  }
  return distance[3][3];
}
