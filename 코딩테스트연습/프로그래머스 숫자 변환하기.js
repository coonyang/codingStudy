function solution(x, y, n) {
  var answer = 0;

  // 1. y까지의 방문 여부 기록
  // 2. [현재 값, 횟수] 를 넣은 큐 만들기
  // 3. 3가지 연산을 넣어 방문한 숫자를 false로 하고 y에 가장 빠르게 도달한 값을 반환

  let visit = new Array(y + 1).fill(false);
  let head = 0;
  let queue = [x, 0];
  visit[x] = true;
  while (count < queue.length) {
    const [a, count] = queue[head++]; // 후위 연산자 맨 처음 0으로 시작한 후 1을 더해서 [0] 판정

    const b = [a + n, a * 2, a * 3];
    for (let c of b) {
      if (c === y) return count + 1;
      if (c < y && !visit[c]) {
        visit[c] = true;
        queue.push([c, count + 1]);
      }
    }
  }

  return answer;
}
