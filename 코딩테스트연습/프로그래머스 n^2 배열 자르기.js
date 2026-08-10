function solution(n, left, right) {
  var answer = [];

  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  let arr2 = [...arr];
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      arr2[j] = arr2[j] + 1;
    }
    arr = [...arr, ...arr2];
  }

  answer = arr.slice(left, right + 1);

  return answer;
}

// 좌표만 계산하여 규칙을 찾고 해당하는 배열만 뽑는 방법
function solution(n, left, right) {
  let answer = [];

  for (let i = left; i <= right; i++) {
    let row = Math.floor(i / n);
    let col = i % n;

    answer.push(Math.max(row, col) + 1);
  }

  return answer;
}
