function solution(numbers, hand) {
  var answer = "";
  const pos = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  var obj = {
    left: "*",
    right: "#",
  };

  for (let a of numbers) {
    if (a === 1 || a === 4 || a === 7) {
      obj.left = a;
      answer += "L";
    } else if (a === 3 || a === 6 || a === 9) {
      obj.right = a;
      answer += "R";
    } else {
      let [lx, ly] = pos[obj.left];
      let [rx, ry] = pos[obj.right];
      let [tx, ty] = pos[a];

      let leftDist = Math.abs(lx - tx) + Math.abs(ly - ty);
      let rightDist = Math.abs(rx - tx) + Math.abs(ry - ty);

      if (leftDist < rightDist) {
        obj.left = a;
        answer += "L";
      } else if (rightDist < leftDist) {
        obj.right = a;
        answer += "R";
      } else {
        if (hand === "left") {
          obj.left = a;
          answer += "L";
        } else {
          obj.right = a;
          answer += "R";
        }
      }
    }
  }

  return answer;
}
