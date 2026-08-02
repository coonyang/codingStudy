function solution(n, words) {
  var answer = [];

  const set = new Set();

  for (let i = 0; i < words.length; i++) {
    if (set.has(words[i])) {
      let a = Math.ceil((i + 1) / n);
      let b = (i + 1) % n;
      if (b === 0) {
        b = n;
      }
      answer = [b, a];
      break;
    }
    set.add(words[i]);
    if (words[i + 1] === undefined) {
      answer = [0, 0];
      break;
    }
    if (words[i + 1][0] !== words[i][words[i].length - 1]) {
      let a = Math.ceil((i + 2) / n);
      let b = (i + 2) % n;
      if (b === 0) {
        b = n;
      }
      answer = [b, a];
      break;
    }
  }

  return answer;
}
