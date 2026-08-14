function solution(citations) {
  var answer = 0;

  for (let i = 1; i <= citations.length; i++) {
    let count = 0;
    for (let a of citations) {
      if (a >= i) {
        count++;
      }
    }
    if (count >= i) {
      answer = count;
    }
  }

  return answer;
}
