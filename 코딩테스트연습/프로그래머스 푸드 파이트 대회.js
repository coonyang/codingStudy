function solution(food) {
  var answer = "";
  let arr = [];
  for (let i = 1; i < food.length; i++) {
    if (food[i] % 2 === 0) {
      for (let j = 0; j < food[i] / 2; j++) {
        arr.push(i);
      }
    } else {
      let a = food[i] - 1;
      for (let j = 0; j < a / 2; j++) {
        arr.push(i);
      }
    }
  }
  answer = arr.join("") + 0 + arr.reverse().join("");
  return answer;
}
