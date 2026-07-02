function solution(n, lost, reserve) {
  var answer = 0;
  let count = 0;
  const same = lost.filter((x) => reserve.includes(x));
  lost = lost.filter((x) => !same.includes(x));
  reserve = reserve.filter((x) => !same.includes(x));

  for (let i of reserve) {
    for (let j = 0; j < lost.length; j++) {
      if (i + 1 === lost[j] || i - 1 === lost[j]) {
        count++;
        lost[j] = -1;
        break;
      }
    }
  }

  answer = n - lost.length + count;

  return answer;
}
