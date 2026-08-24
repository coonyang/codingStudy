// 숫자 배열에서 가장 큰 값을 재귀로 찾아봐.

// numbers = [3, 7, 2, 9, 4]

// 결과:

// 9

function pb() {
  numbers = [3, 7, 2, 9, 4];

  function a(index, b) {
    if (index === numbers.length) {
      return b;
    }

    if (numbers[index] > b) {
      b = numbers[index];
    }

    return a(index + 1, b);
  }

  let answer = a(0, 0);
  return answer;
}
