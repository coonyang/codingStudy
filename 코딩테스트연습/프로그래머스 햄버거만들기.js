function solution(ingredient) {
  var answer = 0;

  let 햄버거 = [1, 2, 3, 1];

  for (let i = 0; i < ingredient.length; i++) {
    let same = true;
    for (let j = 0; j < 햄버거.length; j++) {
      if (ingredient[i + j] !== 햄버거[j]) {
        same = false;
        break;
      }
    }
    if (same) {
      ingredient.splice(i, i + 햄버거.length);
      i = -1;
      answer++;
    }
  }

  return answer;
}

// 스택을 사용하세요.

let stack = [];

for (let x of ingredient) {
  stack.push(x);

  if (
    stack.length >= 4 &&
    stack[stack.length - 4] === 1 &&
    stack[stack.length - 3] === 2 &&
    stack[stack.length - 2] === 3 &&
    stack[stack.length - 1] === 1
  ) {
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    answer++;
  }
}
