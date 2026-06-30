function solution(s, skip, index) {
  var answer = "";

  for (let a of s) {
    let code = a.charCodeAt(0);
    let move = 0;

    while (move < index) {
      code++;

      if (code > 122) code = 97;

      if (!skip.includes(String.fromCharCode(code))) {
        move++;
      }
    }

    answer += String.fromCharCode(code);
  }

  return answer;
}
