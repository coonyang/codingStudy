function solution(cards1, cards2, goal) {
  var answer = "";

  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[0]) {
      cards1.shift();
    } else if (goal[i] === cards2[0]) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  answer = "Yes";

  return answer;
}

// 다른 정답
function solution(cards1, cards2, goal) {
  let i = 0;
  let j = 0;

  for (let word of goal) {
    if (word === cards1[i]) {
      i++;
    } else if (word === cards2[j]) {
      j++;
    } else {
      return "No";
    }
  }

  return "Yes";
}
