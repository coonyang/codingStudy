function solution(bridge_length, weight, truck_weights) {
  var answer = 0;

  // 1. 1번 트럭이 시작하면서 1초스타트
  // 2. 1번 트럭이 다리길이만큼 움직이면서 2초 스타트 및 2번째 트럭의 무게가 다리무게보다 초과하지않으면 출발
  // 3. 2번 반복하면서 건너면 엔드

  let count = 0;
  let a = truck_weights.length;
  let arr = [];
  let end = [];
  while (end.length !== a) {
    count++;
    if (arr.length > 0 && count - arr[0].time >= bridge_length) {
      end.push(arr.shift());
    }
    if (
      truck_weights.length > 0 &&
      arr.reduce((a, b) => a + b.weight, 0) + truck_weights[0] <= weight
    ) {
      arr.push({
        weight: truck_weights.shift(),
        time: count,
      });
    }
  }

  answer += count;
  return answer;
}
