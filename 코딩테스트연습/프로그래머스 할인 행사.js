function solution(want, number, discount) {
  var answer = 0;

  let map = new Map();

  for (let i = 0; i < want.length; i++) {
    map.set(want[i], number[i]);
  }

  for (let start = 0; start <= discount.length - 10; start++) {
    let map2 = new Map();
    for (let i = start; i < start + 10; i++) {
      map2.set(discount[i], (map2.get(discount[i]) || 0) + 1);
    }
    let ok = true;

    for (let [key, value] of map) {
      if (map2.get(key) !== value) {
        ok = false;
        break;
      }
    }
    if (ok) {
      answer++;
    }
  }

  return answer;
}
