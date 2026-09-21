function solution(queue1, queue2) {
  var answer = -2;

  // 1. 배열의 전체 합을 구해 2로 나눔
  // 2. 각 배열의 합중 1의 값보다 큰쪽에서 빼 다른쪽에 추가함
  // 3. 1보다 커진다면 반대쪽 큐에서 빼서 다른쪽에 추가함
  // 4. 일정 횟수 제한을 걸어 넘어가도록 안같아지면 -1

  let count = 0;
  let sum = queue1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
  while (sum !== sum2 && count < 3 * (queue1.length + queue2.length)) {
    if (sum > sum2) {
      let x = queue1.shift();
      queue2.push(x);

      sum -= x;
      sum2 += x;
    } else if (sum < sum2) {
      let x = queue2.shift();
      queue1.push(x);

      sum2 -= x;
      sum += x;
    }

    count++;
  }

  if (sum !== sum2) {
    return -1;
  } else {
    answer = count;
  }

  return answer;
}
