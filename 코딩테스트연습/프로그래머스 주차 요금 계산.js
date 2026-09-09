function solution(fees, records) {
  var answer = [];

  // 1. records 를 공백에 따라 3개로 나눔
  // 2. 각 차량의 시간을 나타내는 오브젝트를 만듬
  // 3. 총 주차 시간을 구한 후 -기본시간 후 남은 시간에 /단위시간 x 단위요금 +기본요금 한 후 answer에 push
  let obj = {};
  for (let a of records) {
    let arr = a.split(" ");
    let arr2 = arr[0].split(":");
    let time = arr2[0] * 60 + arr2[1];
    if (arr[2] === "IN") {
      if (!obj[arr[1]]) {
        obj[arr[1]] = {
          intime: time,
          time: 0,
        };
      } else {
        obj[arr[1]].intime = time;
      }
    } else {
      let b = time - obj[arr[1]].intime;
      obj[arr[1]].time += b;
      obj[arr[1]].intime = 0;
    }
  }
  let cars = Object.keys(obj).sort((a, b) => a - b);
  for (let car of cars) {
    if (obj[car].intime !== 0) {
      let a = 23 * 60 + 59 - obj[car].intime;
      obj[car].time += a;
    }
    let b = fees[1];

    if (obj[car].time > fees[0]) {
      b += Math.ceil((obj[car].time - fees[0]) / fees[2]) * fees[3];
    }
    answer.push(b);
  }

  return answer;
}
