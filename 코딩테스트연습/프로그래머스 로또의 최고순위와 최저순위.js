function solution(lottos, win_nums) {
  var answer = [];

  let zero = lottos.filter((a) => a === 0).length;
  let count = 0;
  let 순위 = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === win_nums[j]) {
        count++;
      }
    }
  }

  answer.push(순위[count + zero], 순위[count]);
  return answer;
}
