function solution(storey) {
  var answer = 0;

  // 1. 1의 자리 수는 5층일땐 위 아래 상관없고 4 이하면 아래 6 이상이면 위로 가는게 좋음
  // 2. 10의 자리 수 100의 자리 수도 똑같음
  // 3. 자릿수 별로 나눈 후 5를 기준으로 비교하여 1의 자리 숫자부터 올려 확인함

  let arr = storey.toString().split("").map(Number);
  let count = 0;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > 5 || (arr[i] === 5 && arr[i - 1] >= 5)) {
      count += 10 - arr[i];
      arr[i] = 0;

      let j = i - 1;

      while (j >= 0 && arr[j] === 9) {
        arr[j] = 0;
        j--;
      }

      if (j >= 0) {
        arr[j] += 1;
      } else {
        count += 1;
      }
    } else {
      count += arr[i];
    }
  }
  answer = count;
  return answer;
}
