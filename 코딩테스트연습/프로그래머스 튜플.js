function solution(s) {
  var answer = [];

  let arr = JSON.parse(s.replaceAll("{", "[").replaceAll("}", "]"));

  arr.sort((a, b) => a.length - b.length);

  answer.push(arr[0][0]);

  for (let i = 0; i < arr.length - 1; i++) {
    let num = answer[i];

    for (let j = i + 1; j < arr.length; j++) {
      arr[j] = arr[j].filter((x) => x !== num);
    }

    answer.push(arr[i + 1][0]);
  }

  return answer;
}
