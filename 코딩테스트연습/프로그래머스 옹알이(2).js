function solution(babbling) {
  var answer = 0;

  let arr = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    let word = babbling[i];

    for (let a of arr) {
      if (word.includes(a + a)) {
        word = "불가능";
        break;
      }
      word = word.replaceAll(a, "");
    }

    if (word === "") {
      answer++;
    }
  }

  return answer;
}
