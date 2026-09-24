function solution(sequence, k) {
  var answer = [];

  // 1. 연속된 배열을 찾아 해당 배열과 시작 인덱스/마지막 인덱스 와 함께 담는다.
  // 2. arr중 길이가 가장 짧은것을 찾는다
  // 3. 해당 숫자가 있는 인덱스를 찾아 출력

  let obj = {};

  let a = 1;

  for (let i = 0; i < sequence.length; i++) {
    let count = sequence[i];

    if (count === k) {
      obj[a] = {
        start: i,
        end: i,
        length: 1,
      };

      a++;
    }
    for (let j = i + 1; j < sequence.length; j++) {
      count += sequence[j];
      if (count > k) {
        break;
      }
      if (count === k) {
        obj[a] = {
          start: i,
          end: j,
          length: j - i + 1,
        };
        a++;
      }
    }
  }

  let min = null;
  for (let key in obj) {
    if (min === null || obj[key].length < obj[min].length) {
      min = key;
    }
  }

  answer.push(obj[min].start, obj[min].end);

  return answer;
}
