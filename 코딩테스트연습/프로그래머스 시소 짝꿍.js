function solution(weights) {
  var answer = 0;

  // 1. weights 기준 visit 만들기

  // 2. 2개를 뽑아서 각 의자에 앉힌 후 숫자를 비교하여 같으면 한쌍 추가 및 반복문 빠져나오기

  let arr = new Array(weights.length).fill(false);

  let arr2 = [2, 3, 4];

  for (let i = 0; i < weights.length; i++) {
    arr[i] = true;
    for (let j = i + 1; j < weights.length; j++) {
      if (arr[j] === false) {
        arr[j] = true;

        for (let k = 0; k < arr2.length; k++) {
          let a = weights[i] * arr2[k];
          let found = false;
          for (let l = 0; l < arr2.length; l++) {
            let b = weights[j] * arr2[l];

            if (a === b) {
              answer++;
              found = true;
              break;
            }
          }
          if (found) {
            break;
          }
        }

        arr[j] = false;
      }
    }
    arr[i] = false;
  }

  return answer;
}
