function solution(name, yearning, photo) {
  var answer = [];

  for (let 사진 of photo) {
    let arr = [];
    for (let 이름 of name) {
      let count = 0;
      for (let 사진속인물 of 사진) {
        if (사진속인물 === 이름) {
          count++;
        }
      }
      arr.push(count);
    }

    let b = 0;

    for (let i = 0; i < yearning.length; i++) {
      let a = arr[i] * yearning[i];

      b = b + a;
    }
    answer.push(b);
  }

  return answer;
}

// 문제에 이름이 중복 되지 않는다고 나와있으므로 다시 풀기...

function solution(name, yearning, photo) {
  var answer = [];

  for (let 사진 of photo) {
    let sum = 0;
    for (사진속인물 of 사진) {
      let a = name.indexOf(사진속인물);
      if (a !== -1) {
        sum += yearning[a];
      }
    }
    answer.push(sum);
  }

  return answer;
}
