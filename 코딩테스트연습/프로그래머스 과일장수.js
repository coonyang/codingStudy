function solution(k, m, score) {
  var answer = 0;

  score.sort((a, b) => b - a);

  let arr = [];

  for (let i = 0; i < score.length; i += m) {
    arr.push(score.slice(i, i + m));
  }

  for (let box of arr) {
    answer += box[box.length - 1] * m;
  }

  return answer;
}

// 내림차순을 한 수 m의 배수번째 사과는 항상 마지막 사과이므로 arr를 만들지 않고 계산이 가능하다.

score.sort((a, b) => b - a);

for (let i = 0; i + m <= score.length; i += m) {
  answer += score[i + m - 1] * m;
}
