function solution(k, tangerine) {
  var answer = 0;

  let arr = tangerine.sort((a, b) => a - b);
  let count = 0;
  let arr2 = [];
  for (let i = 0; i < tangerine.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    } else {
      count++;
      arr2.push(count);
      count = 0;
    }
  }
  arr2.sort((a, b) => b - a);

  for (let i = 0; i < arr2.length; i++) {
    count += arr2[i];
    if (count >= k) {
      answer = i + 1;
      break;
    }
  }

  return answer;
}

// map 을 활용하면 바로바로 숫자를 찾을수 있음
let map = new Map();

for (let num of tangerine) {
  map.set(num, (map.get(num) || 0) + 1);
}

let arr = [...map.values()];

console.log(arr);
