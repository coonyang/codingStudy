function solution(price, money, count) {
  var answer = -1;
  var a = 0;
  for (let i = 1; i <= count; i++) {
    a += i * price;
  } // price * count * (count+1) / 2 로도 가능
  answer = money >= a ? 0 : a - money;
  return answer;
}
