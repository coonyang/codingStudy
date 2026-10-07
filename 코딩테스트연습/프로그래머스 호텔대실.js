function solution(book_time) {
  var answer = 0;

  // 0. 시작 시간대기준으로 정렬함
  // 1. 첫번째 시간에 한 방을 만듬(나가는 시간은 +10분 추가하여 잡음)
  // 2. 두번째 시간과 첫번째 시간을 비교하고 겹친다면 두번째 방을 만듬
  // 3. 3번째 시간부턴 1, 2번을 같이 비교하여 둘다 겹친다면 세번째 방을 만듬
  // 4. 4번째도 마찬가지로 1 2 3 번을 비교하여 겹치는 방이 있다면 방을 늘려감 겹치지않는다면 빈 방에 넣음

  let arr = [];

  for (let a of book_time) {
    let b = a[0].split(":").map(Number);
    let c = b[0] * 60 + b[1];

    let d = a[1].split(":").map(Number);
    let e = d[0] * 60 + d[1] + 10;
    arr.push([c, e]);
  }

  arr.sort((a, b) => a[0] - b[0]);

  let arr2 = [];

  for (let a of arr) {
    if (arr2.length === 0) {
      arr2.push(a);
      continue;
    }

    let 넣음 = false;

    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i][1] <= a[0]) {
        arr2[i] = a;

        넣음 = true;
        break;
      }
    }

    if (!넣음) {
      arr2.push(a);
    }
  }

  answer = arr2.length;

  return answer;
}
