function solution(s) {
  var answer = 0;

  let str = s + s;

  for (let start = 0; start < s.length; start++) {
    let stack = [];
    let a = true;
    for (let i = start; i < start + s.length; i++) {
      if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
        stack.push(str[i]);
      } else {
        if (str[i] === ")") {
          if (stack.pop() !== "(") {
            a = false;
            break;
          }
        } else if (str[i] === "}") {
          if (stack.pop() !== "{") {
            a = false;
            break;
          }
        } else {
          if (stack.pop() !== "[") {
            a = false;
            break;
          }
        }
      }
    }
    if (a && stack.length === 0) {
      answer++;
    }
  }
  return answer;
}
