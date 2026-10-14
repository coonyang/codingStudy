function solution(n, k, enemy) {
  var answer = 0;

  // 1. n을 차감하면서 라운드를 진행해나감
  // 2. n이 적보다 낮아지면 가장 많은 수가 있는 적에게 무적권을 써 k를 차감하며 그만큼 n을 추가함
  // 3. 반복

  let 진행한라운드 = [];
  for (let i = 0; i < enemy.length; i++) {
    n -= enemy[i];
    진행한라운드.push(enemy[i]);
    if (n < 0 && k > 0) {
      k--;
      진행한라운드.sort((a, b) => b - a);
      n += 진행한라운드[0];
      진행한라운드.shift();
      answer++;
    }

    if (n < 0) {
      break;
    }
    answer++;
  }

  return answer;
}
