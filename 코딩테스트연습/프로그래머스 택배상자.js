function solution(order) {
  var answer = 0;

  // 1. 택배 상자를 order[0] 값까지 순서대로 넣고 역으로 꺼내기
  // 2. 현재 order 순서에 맞는 상자가 있는지 확인하여 꺼내기
  let arr = [];
  let a = 0;
  for (let i = 1; i < order.length + 1; i++) {
    arr.push(i);

    while (arr.length > 0 && arr[arr.length - 1] === order[a]) {
      arr.pop();
      answer++;
      a++;
    }
  }
  return answer;
}
