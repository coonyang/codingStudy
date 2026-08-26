function solution(word) {
  var answer = 0;
  let vowels = ["A", "E", "I", "O", "U"];

  function a(str) {
    answer++;

    if (str === word) return true;
    if (str.length === 5) return false;

    for (let i = 0; i < vowels.length; i++) {
      if (a(str + vowels[i])) return true;
    }

    return false;
  }
  a("");
  return answer;
}
