function solution(N, stages) {
  var answer = [];

  stages.sort();

  let arr3 = [];

  for (let i = 1; i <= N; i++) {
    let arr = [];
    let arr2 = [];
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] === i) {
        arr.push(stages[j]);
      }
      if (stages[j] >= i) {
        arr2.push(stages[j]);
      }
    }
    if (arr2.length === 0) {
      arr3.push({ 스테이지: i, 실패율: 0 });
    } else {
      arr3.push({ 스테이지: i, 실패율: arr.length / arr2.length });
    }
  }

  arr3.sort((a, b) => {
    if (b.실패율 !== a.실패율) {
      return b.실패율 - a.실패율;
    }
    return a.스테이지 - b.스테이지;
  });
  answer = arr3.map((v) => v.스테이지);

  return answer;
}
// -------------------------------------------------------
let arr = [];

for (let i = 1; i <= N; i++) {
  let a = stages.filter((v) => v >= i).length;
  let b = stages.filter((v) => v === i).length;

  if (b / a === 0) {
    arr.push({ 스테이지: i, 실패율: 0 });
  } else {
    arr.push({ 스테이지: i, 실패율: b / a });
  }
}
// ---------------------------------------------------------
let count = Array(N + 2).fill(0);

for (let stage of stages) {
  count[stage]++;
}

let people = stages.length;
let arr = [];

for (let i = 1; i <= N; i++) {
  let fail;

  if (people === 0) {
    fail = 0;
  } else {
    fail = count[i] / people;
  }

  arr.push({
    스테이지: i,
    실패율: fail,
  });

  people -= count[i];
}
