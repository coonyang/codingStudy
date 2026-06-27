function solution(number, limit, power) {
  var answer = 0;
  let 약수 = [];
  for (let i = 1; i <= number; i++) {
    let arr = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        arr.push(j);
      }
    }
    약수.push(arr.length);
  }

  for (let i = 0; i < 약수.length; i++) {
    if (약수[i] > limit) {
      answer += power;
    } else {
      answer += 약수[i];
    }
  }

  return answer;
}

// 위에도 정답은 맞지만 좀 더 효율적인 정답 추론

function solution(number, limit, power) {
  var answer = 0;

  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j * j <= i; j++) {
      // 약수의 수를 제곱까지만 구함
      if (i % j === 0) {
        if (j * j === i) {
          count++;
        } else {
          count += 2;
        }
      }
    }
    if (count > limit) {
      answer += power;
    } else {
      answer += count;
    }
  }

  return answer;
}
