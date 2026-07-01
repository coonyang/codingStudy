function solution(keymap, targets) {
  var answer = [];

  let obj = {};

  keymap.map((p) => {
    for (let i = 0; i < p.length; i++) {
      if (obj[p[i]] === undefined) {
        obj[p[i]] = i + 1;
      } else {
        obj[p[i]] = Math.min(obj[p[i]], i + 1);
      }
    }
  });

  for (let p of targets) {
    let count = 0;
    let boolean = true;
    for (let i = 0; i < p.length; i++) {
      if (obj[p[i]] === undefined) {
        answer.push(-1);
        boolean = false;
        break;
      }
      count += obj[p[i]];
    }
    if (boolean) {
      answer.push(count);
    }
  }

  return answer;
}
