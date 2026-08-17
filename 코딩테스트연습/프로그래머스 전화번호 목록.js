function solution(phone_book) {
  var answer = true;

  let arr = phone_book.sort();

  for (let i = 0; i < arr.length; i++) {
    let a = arr[0];
    if (arr[i + 1].startsWith(arr[i])) {
      // 단어.startsWith() = 단어가 ()안의 문자로 시작하면 ture를 반환해줌
      return false;
    }
  }

  return answer;
}
