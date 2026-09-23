function solution(arr) {
  var answer = [0, 0];

  // 1. 각 칸을 검사할 함수 하나를 만듬
  // 2. 행, 열, 현재영역의 크기 변수값으로 넣음

  function quad(x, y, size) {
    // 현재 영역의 첫 번째 값
    let first = arr[x][y];

    // 현재 영역이 모두 같은지 확인
    let same = true;

    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (arr[i][j] !== first) {
          same = false;
          break;
        }
      }

      if (!same) break;
    }

    // 전부 같음
    if (same) {
      answer[first]++;
      return;
    }

    // 섞여 있음 → 4등분
    let half = size / 2;

    quad(x, y, half);
    quad(x, y + half, half);
    quad(x + half, y, half);
    quad(x + half, y + half, half);
  }

  quad(0, 0, arr.length);

  return answer;
}
