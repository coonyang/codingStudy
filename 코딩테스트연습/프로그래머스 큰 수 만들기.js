function solution(number, k) {
  // 그냥 맨 앞자리 부터 제일 작은 수를 찾아 지우면 되는거 아님?
  // 1. 첫번째 자리 수와 두번째 자리 수를 비교하여 작으면 첫째자리수를 지우고 아니면 패스
  // 2. 1반복
  let arr = number.split("");
  let count = 0;
  let i = 0;

  while (count < k && i < arr.length - 1) {
    if (arr[i] < arr[i + 1]) {
      arr.splice(i, 1);
      count++;
    } else {
      i++;
    }
  }

  // 아직 k개를 못 지웠다면 뒤에서 제거
  while (count < k) {
    arr.pop();
    count++;
  }

  return arr.join("");
}
