function solution(n, wires) {
  var answer = Infinity;

  // 1. 송전탑 연결 관계를 저장할 graph 만들기
  let graph = Array.from({ length: n + 1 }, () => []);

  // 2. wires를 graph 형태로 저장
  for (let [a, b] of wires) {
    graph[a].push(b);
    graph[b].push(a);
  }
  // graph[1] = [2, 3] > 1번 송전탑은 2번 3번 송전탑과 연결되어있다 는 뜻

  // 3. 전선을 하나씩 끊어보기
  for (let [cutA, cutB] of wires) {
    // 방문했는지 확인
    let visited = new Array(n + 1).fill(false);

    // 한쪽 전력망의 송전탑 개수
    let count = 0;

    // 4. DFS
    function dfs(node) {
      visited[node] = true;
      count++;

      for (let next of graph[node]) {
        // 지금 끊은 전선이면 건너뛰기
        if (
          (node === cutA && next === cutB) ||
          (node === cutB && next === cutA)
        ) {
          continue;
        }

        // 아직 방문하지 않은 송전탑이면 이동
        if (!visited[next]) {
          dfs(next);
        }
      }
    }

    // 5. 1번 송전탑에서 출발
    dfs(1);

    // 6. 반대쪽 전력망의 개수
    let other = n - count;

    // 7. 두 전력망의 차이
    let diff = Math.abs(count - other);

    // 8. 가장 작은 차이 저장
    answer = Math.min(answer, diff);
  }

  return answer;
}
