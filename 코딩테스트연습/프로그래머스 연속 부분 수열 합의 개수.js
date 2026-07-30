function solution(elements) {
  var answer = 0;

  let a = elements.length;
  let set = new Set();
  let arr = elements.concat(elements);

  for (let i = 1; i <= a; i++) {
    for (let j = 0; j < a; j++) {
      set.add(arr.slice(j, j + i).reduce((a, b) => a + b, 0));
    }
  }
  answer = set.size;
  return answer;
}
