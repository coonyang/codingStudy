function solution(scoville, K) {
  var answer = 0;

  // 1. 스코빌 지수를 섞음 (기존 1, 2 제거 후 섞은 값 넣기)
  // 2. sort()로 다시 정렬 후 0번째 수가 k 값보다 낮은지 확인
  // 3. 낮으면 다시 1번으로 돌아감
  // 4. 섞을수 없는 경우 -1
  while (scoville[0] < K && scoville.length >= 2) {
    let a = 0;
    a = scoville[0] + scoville[1] * 2;
    scoville.splice(0, 2);
    scoville.push(a);
    scoville.sort((a, b) => a - b);
    answer++;
  }
  if (scoville[0] < K) {
    return -1;
  }

  return answer;
}
