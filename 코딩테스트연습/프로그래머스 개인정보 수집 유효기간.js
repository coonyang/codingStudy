function solution(today, terms, privacies) {
  var answer = [];

  let arr = today.split(".").map(Number);
  let 날짜 = arr[0] * 12 * 28 + (arr[1] - 1) * 28 + arr[2];

  let obj = {};
  for (let a of terms) {
    let arr2 = a.split(" "); // arr2 로 쓰지말고 구조분해할당 하여 let [type, month] = 이렇게 적으면 보기 편함
    obj[arr2[0]] = Number(arr2[1]) * 28;
  }

  for (let i = 0; i < privacies.length; i++) {
    let arr3 = privacies[i].split(" "); // arr3 로 쓰지말고 구조분해할당 하면 보기 편함 ex) let [date, type] =
    let arr4 = arr3[0].split(".").map(Number);
    let 날짜2 = arr4[0] * 12 * 28 + (arr4[1] - 1) * 28 + arr4[2];

    날짜2 = 날짜2 + obj[arr3[1]];

    if (날짜2 <= 날짜) {
      answer.push(i + 1);
    }
  }

  return answer;
}
