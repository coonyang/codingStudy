function solution(s) {
  var answer = true;

  // 왜 있는거지 진짜..
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");

  let countp = 0;
  let county = 0;
  s = s.toLowerCase(); // 문자열의 알파벳들을 모두 소문자로 바꿔줌
  for (let a of s) {
    if (a === "p") {
      countp++;
    }
    if (a === "y") {
      county++;
    }
  }
  if (countp === county) {
    return answer;
  } else {
    return false;
  }
}

// 다른 정답
function solution(s) {
  // 소문자로 바꾼 뒤 "p"로 쪼갠 배열의 길이와 "y"로 쪼갠 배열의 길이를 비교
  return (
    s.toLowerCase().split("p").length === s.toLowerCase().split("y").length
  );
}
