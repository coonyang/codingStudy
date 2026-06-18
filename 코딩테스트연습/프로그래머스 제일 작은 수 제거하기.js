function solution(arr) {
  var answer = [];

  if (arr.length == 1) {
    return [-1];
  }

  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  answer = arr;
  return answer;
}
// spice(a,b) = 배열에서 a위치부터 b개 까지 잘라냄
// Math.min(a,b,c) =  가장 작은 수를 찾아줌(배열이면 ... 을 써서 []를 벗겨줘야함)
