function gcd(a, b) {
  // 최대 공약수
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  // 최소 공배수
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  var answer = 0;

  answer = arr.reduce((acc, cur) => lcm(acc, cur));

  return answer;
}
