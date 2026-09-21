function solution(numbers) {
  var answer = [];

  // a ^ b = XOR 로 비트를 비교할 수 있음 서로 다른 자리가 나타나면 1 로 나옴 같으면 0

  for (let a of numbers) {
    let i = 1;
    while (true) {
      let b = a + i;
      let c = (a ^ b).toString(2);
      let count = 0;
      for (let o of c) {
        if (o === "1") {
          count++;
        }
      }
      if (count <= 2) {
        answer.push(b);
        break;
      }
      i++;
    }
  }

  return answer;
}
