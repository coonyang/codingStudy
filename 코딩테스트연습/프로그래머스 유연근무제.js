function solution(schedules, timelogs, startday) {
  var answer = 0;

  for (let i = 0; i < schedules.length; i++) {
    let 상품 = true;
    let 요일 = startday;

    let h = Math.floor(schedules[i] / 100);
    let m = schedules[i] % 100;

    m += 10;

    if (m >= 60) {
      h++;
      m -= 60;
    }

    let 시간 = h * 100 + m;

    for (let a of timelogs[i]) {
      if (요일 === 8) {
        요일 = 1;
      }
      if (시간 < a) {
        if (요일 < 6) {
          상품 = false;
          break;
        }
      }
      요일++;
    }
    if (상품) {
      answer++;
    }
  }

  return answer;
}
