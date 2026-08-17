function solution(topping) {
  var answer = 0;

  for (let i = 1; i < topping.length; i++) {
    if (new Set(topping.slice(0, i)).size === new Set(topping.slice(i)).size) {
      answer++;
    }
  }

  return answer;
}

// 오답 노트
// 문제점 : 매번 slice + Set 을 만들어 효율이 안좋다.

function solution(topping) {
  var answer = 0;

  let left = new Set(); // left는 토핑 종류 비교를 위한 Set
  let right = new Map(); // right는 Map 형식으로 토핑이 각각 몇 개 있는지 확인

  for (let t of topping) {
    right.set(t, (right.get(t) || 0) + 1); // right에 토핑을 다 넣음
  }

  for (let i = 0; i < topping.length; i++) {
    let t = topping[i];

    left.add(t); // 토핑을 left에 추가하고

    right.set(t, right.get(t) - 1); // 추가한 토핑은 right에서 제외

    if (right.get(t) === 0) {
      right.delete(t); // 토핑이 right에서 0이 되면 삭제
    }

    if (left.size === right.size) {
      // .size로 길이를 비교하여 같으면 answer++
      answer++;
    }
  }

  return answer;
}
