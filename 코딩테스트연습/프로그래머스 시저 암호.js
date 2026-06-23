function solution(s, n) {
  let answer = "";

  for (let char of s) {
    if (char === " ") {
      answer += " ";
    } else if (char.charCodeAt(0) >= 97) {
      let code = ((char.charCodeAt(0) - 97 + n) % 26) + 97;
      answer += String.fromCharCode(code);
    } else {
      let code = ((char.charCodeAt(0) - 65 + n) % 26) + 65;
      answer += String.fromCharCode(code);
    }
  }

  return answer;
}
