function solution(n) {
  var answer = 0;

  let a = n.toString(2);
  let b = n + 1;

  let count = 0;
  for (let char of a) {
    if (char === "1") {
      count++;
    }
  }

  while (b <= 1000000) {
    let c = b.toString(2);
    let count2 = 0;
    for (let char of c) {
      if (char === "1") {
        count2++;
      }
    }
    if (count === count2) {
      answer = b;
      break;
    }
    b++;
  }
  return answer;
}
