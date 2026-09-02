function solution(prices) {
  var answer = [];

  // 1. i 번째 위치에 있는 가격이 몇번째에 떨어지는지 표시
  // 2. if(떨어졌으면) > 떨어진 위치 - 현재 위치 = return값 / break;
  // 3. if(안떨어졌으면) > 반복문 반복
  // 4. 마지막 위치는 항상 0

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] < prices[j]) {
        answer.push(j - i);
        break;
      }
    }
    if (answer.length === i) {
      answer.push(prices.length - 1 - i);
    }
  }

  return answer;
}
