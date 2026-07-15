const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  // .on()은 이 이벤트가 발생하면 이 함수를 실행해줘 라는 뜻
  // 사용자가 한 줄 입력하고 엔터 칠 때마다 실행됨
  input = [line];
}).on("close", function () {
  // 입력이 끝났을 때(스트림이 닫힐 때) 실행됨
  str = input[0];
  console.log(str);
});
