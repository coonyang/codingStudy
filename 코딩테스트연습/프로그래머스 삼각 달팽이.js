function solution(n) {
  var answer = [];

  // 1. 점점 칸이 많아지는 배열을 만듬
  // 2. 첫번째칸에 순서대로 숫자를 채움
  // 3. 마지막 줄이면 옆으로 채움
  // 4. 마지막칸이 다 찼으면 위로 올림
  // 5. 올라올땐 뒤에서 마지막 한칸씩 앞으로 채우고 내려갈땐 한칸앞부터 채움
  // 6. 반복

  let arr = Array.from({ length: n }, () => []);

  let count = 1;
  let i = 0;
  let j = 0;

  // 전체 칸 수
  let total = (n * (n + 1)) / 2;

  while (count <= total) {
    // 아래
    while (i < n && arr[i][j] === undefined) {
      arr[i][j] = count;
      count++;
      i++;
    }

    i--;
    j++;

    // 오른쪽
    while (j < n && arr[i][j] === undefined) {
      arr[i][j] = count;
      count++;
      j++;
    }

    i--;
    j--;

    // 위
    while (i >= 0 && j >= 0 && arr[i][j] === undefined) {
      arr[i][j] = count;
      count++;
      i--;
      j--;
    }

    i++;
    j++;
  }

  return arr.flat();
}
