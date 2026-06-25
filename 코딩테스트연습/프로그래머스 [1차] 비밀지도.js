function solution(n, arr1, arr2) {
  var answer = [];
  let 지도1 = [];
  let 지도2 = [];
  for (let a of arr1) {
    지도1.push(a.toString(2).padStart(n, "0"));
  }
  for (let a of arr2) {
    지도2.push(a.toString(2).padStart(n, "0"));
  }

  for (let i = 0; i < arr1.length; i++) {
    let 벽 = "";
    for (let j = 0; j < n; j++) {
      if (지도1[i].toString()[j] === "1" || 지도2[i].toString()[j] === "1") {
        벽 += "#";
      } else {
        벽 += " ";
      }
    }
    answer.push(벽);
  }

  return answer;
}

// padStart(길이, 채울문자) = 최종 길이가 길이 가 되도록 채울문자를 채움

// 비트에 OR( | ) 연산자를 쓰면 겹쳐짐 ex) (9 | 30) = 31 => 2진법으로 11111
// replaceAll("a", "b") = 모든 a를 b로 바꿔줌
// 알고 난 후 문제 풀이
function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    answer.push(
      (arr1[i] | arr2[i])
        .toString(2)
        .padStart(n, "0")
        .replaceAll("1", "#")
        .replaceAll("0", " "),
    );
  }

  return answer;
}
