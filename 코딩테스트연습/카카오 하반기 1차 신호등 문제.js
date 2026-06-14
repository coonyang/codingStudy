function solution(signals) {
  var answer = 0;
  const 신호등 = ["R", "Y", "G"];
  const lists = signals.map((item) => {
    const pattern = item.flatMap((count, i) => Array(count).fill(신호등[i]));
    return Array.from({ length: 20 }, (_, i) => pattern[i % pattern.length]);
  });
  // flat(a) = a에 따른 괄호를 벗겨줌
  // flatMap() = 배열안의 괄호를 1단계 벗겨줌
  // Array(a).fill(b) = a값 만큼 b를 배열에 넣어줌
  // Array.from({length:a}) = a칸 크기의 배열을 만듬

  for (let i = 0; i < 20; i++) {
    const 검사 = lists.every((list) => list[i] === "Y");
    if (검사) {
      return (answer = i + 1);
    } else {
      return (answer = -1);
    }
  }
  // every(조건) = 모든 배열의 조건이 참이면 true를 반환해줌

  return answer;
}
