function solution(k, score) {
  var answer = [];

  let arr = [];

  for (let i = 0; i < score.length; i++) {
    arr.push(score[i]);
    arr.sort((a, b) => b - a);
    arr = arr.slice(0, k); // 하나 지울땐 shift() 로 제거 가능
    answer.push(arr[arr.length - 1]);
  }

  return answer;
}
