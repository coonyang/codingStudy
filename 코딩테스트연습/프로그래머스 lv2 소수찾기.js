function solution(numbers) {
  var answer = 0;

  // 1. Set 을 사용해 중복을 미리 제거함
  // 2. visit 을 이용한 재귀함수를 만듬
  // 3. numbers로 가능한 모든 숫자를 배열에 저장함
  // 4. 각 숫자가 소수면 answer++

  let arr = new Set();

  function dfs(cur, visit) {
    if (cur.length > 0) {
      arr.add(Number(cur.join("")));
    }
    for (let i = 0; i < numbers.length; i++) {
      {
        if (visit[i]) continue;

        visit[i] = true;
        cur.push(numbers[i]);

        dfs(cur, visit);

        cur.pop();
        visit[i] = false;
      }
    }
  }
  dfs([], Array(numbers.length).fill(false));

  for (let n of arr) {
    if (n < 2) continue;

    let bool = true;

    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        bool = false;
        break;
      }
    }

    if (bool) {
      answer++;
    }
  }

  return answer;
}
