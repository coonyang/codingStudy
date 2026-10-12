function solution(N, road, K) {
  var answer = 0;

  // 1. 우선 1을 기준으로 연결된 마을을 찾아 걸리는 시간을 적립 후 K 이하면 배열에 추가
  // 2. 연결된 마을에서 1이아닌 다른 연결된 마을을 찾아 걸리는 시간을 적립 후 K 이하면 배열에 추가
  // 3. 반복하여 찾고 걸리는 시간이 K 가 넘어가면 종료
  // 4. road 의 첫번째나 두번째 값이 마을이므로 둘 중에 찾고 233 324 인 경우는 멀리걸리는 324를 제외함

  let distance = new Array(N + 1).fill(Infinity);
  distance[1] = 0;

  let visited = new Array(N + 1).fill(false);

  for (let i = 1; i <= N; i++) {
    let min = Infinity;
    let current = 0;

    // 1. 아직 방문하지 않은 마을 중 가장 가까운 마을 찾기
    for (let j = 1; j <= N; j++) {
      if (visited[j] === false && distance[j] < min) {
        min = distance[j];
        current = j;
      }
    }

    // 더 이상 갈 수 있는 마을이 없으면 종료
    if (current === 0) break;

    // 2. 현재 마을의 최단 시간 확정
    visited[current] = true;

    // 3. 현재 마을과 연결된 도로 확인
    for (let j = 0; j < road.length; j++) {
      let a = road[j][0];
      let b = road[j][1];
      let time = road[j][2];

      if (a === current && distance[current] + time < distance[b]) {
        distance[b] = distance[current] + time;
      }

      if (b === current && distance[current] + time < distance[a]) {
        distance[a] = distance[current] + time;
      }
    }
  }
  for (let i = 1; i < distance.length; i++) {
    if (distance[i] <= K) {
      answer++;
    }
  }

  return answer;
}
