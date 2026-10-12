function solution(players, m, k) {
  var answer = 0;

  // 1. 이용자가 많아졌을때 서버는 이용자 / m (나머지 제외) 만큼의 서버가 있어야함
  // 2. 시간을 카운트하면서 현재 서버가 언제 종료되는지 체크
  // 3. 각 시간대별로 이용자와 현재 증설돼있는 서버를 비교하여 판단함
  // 4. 새로운 서버를 증설할때마다 answer을 +하며 각 서버는 종료시간을 가지고있음

  let 현재시간 = 0;
  let 현재서버 = 0;
  let 서버 = [];

  for (let a of players) {
    if (서버.length > 0) {
      for (let i = 0; i < 서버.length; i++) {
        if (서버[i][1] === 현재시간) {
          현재서버 -= 서버[i][0];
          서버.splice(i, 1);
          i--;
        }
      }
    }

    let 증설할서버수 = Math.floor(a / m);
    if (현재서버 < 증설할서버수) {
      증설할서버수 -= 현재서버;

      서버.push([증설할서버수, 현재시간 + k]);
      현재서버 += 증설할서버수;
      answer += 증설할서버수;
    }

    현재시간++;
  }

  return answer;
}
