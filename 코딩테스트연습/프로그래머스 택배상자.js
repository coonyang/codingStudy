function solution(order) {
  var answer = 0;

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
