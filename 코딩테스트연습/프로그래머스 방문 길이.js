function solution(dirs) {
  var answer = 0;

  let arr = [0, 0];

  let arr2 = [];
  for (let i = 0; i < dirs.length; i++) {
    let next = [...arr];
    if (dirs[i] === "U") {
      next[1] += 1;
    } else if (dirs[i] === "D") {
      next[1] -= 1;
    } else if (dirs[i] === "L") {
      next[0] -= 1;
    } else {
      next[0] += 1;
    }
    if (next[0] < -5 || next[0] > 5 || next[1] < -5 || next[1] > 5) {
      continue;
    }
    let a = `${arr[0]},${arr[1]}-${next[0]},${next[1]}`;
    let b = `${next[0]},${next[1]}-${arr[0]},${arr[1]}`;

    if (!arr2.includes(a) && !arr2.includes(b)) {
      arr2.push(a);
      answer++;
    }

    arr = next;
  }

  return answer;
}
