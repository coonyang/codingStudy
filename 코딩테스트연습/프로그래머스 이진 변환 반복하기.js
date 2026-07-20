function solution(s) {
  var answer = [];

  let count = 0;
  let zeroCount = 0;

  while (s !== "1") {
    for (let ch of s) {
      if (ch === "0") {
        zeroCount++;
      }
    }

    s = s.replaceAll("0", "");
    count++;
    s = s.length.toString(2);
  }

  answer = [count, zeroCount];
  return answer;
}
