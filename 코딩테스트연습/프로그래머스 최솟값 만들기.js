function solution(A, B) {
  var answer = 0;

  for (let i = 0; i < A.length; i++) {
    let max = Math.max(...A);
    let min = Math.min(...B);
    let idxa = A.indexOf(max);
    let idxb = B.indexOf(min);
    answer += max * min;
    A.splice(idxa, 1);
    B.splice(idxb, 1);
  }

  return answer;
}

// 그냥 찾을 필요없이 정렬후 하나씩 곱하면 끝...
A.sort((a, b) => a - b); // 오름차순
B.sort((a, b) => b - a); // 내림차순

let answer = 0;

for (let i = 0; i < A.length; i++) {
  answer += A[i] * B[i];
}
