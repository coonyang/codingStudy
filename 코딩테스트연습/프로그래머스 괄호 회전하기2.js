function solution(s) {
  var answer = 0;

  for (let i = 0; i < s.length; i++) {
    let str = s.slice(-i) + s.slice(0, s.length - i); // s.slice(0, -i)는 i=0일 때 문제 있음
    let stack = [];
    let 확인 = true;

    for (let a of str) {
      if (a === "(" || a === "{" || a === "[") {
        stack.push(a);
      } else {
        let last = stack.pop();
        if (
          (a === ")" && last !== "(") ||
          (a === "}" && last !== "{") ||
          (a === "]" && last !== "[")
        ) {
          확인 = false;
          break;
        }
      }
    }

    if (확인 && stack.length === 0) {
      answer++;
    }
  }

  return answer;
}
