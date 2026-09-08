function solution(msg) {
  var answer = [];
  // 1. A~Z까지의 사전을 만듬
  // 2. 첫 글자의 사전 번호를 push한 후 두 번째 글자를 합쳐 사전에 추가함
  // 3. 두 번째 글자와 세 번째 글자가 사전에 있는지 확인하고 없으면 두번째 글자 사전번호를 push하고 세번째글자를 합쳐 사전에 추가함
  // 4. 3번 반복

  let dict = {};
  let index = 1;

  for (let i = 65; i <= 90; i++) {
    dict[String.fromCharCode(i)] = index++;
  }

  let word = "";

  for (let i = 0; i < msg.length; i++) {
    let next = msg[i];
    if (word + next in dict) {
      word = word + next;
    } else {
      answer.push(dict[word]);
      dict[word + next] = index++;
      word = next;
    }
  }

  return answer;
}
