function solution(seoul) {
  var answer = "";

  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      answer = `김서방은 ${i}에 있다`;

      return answer;
    }
  }
}

// 다른 정답
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}
// indexOf(a) = 배열안의 a의 위치를 찾아줌
