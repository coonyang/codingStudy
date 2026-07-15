function solution(players, callings) {
  const arr = [...players];
  const position = new Map();

  arr.forEach((name, idx) => position.set(name, idx));

  for (const call of callings) {
    const num = position.get(call);
    const prevName = arr[num - 1];

    [arr[num - 1], arr[num]] = [arr[num], arr[num - 1]];

    position.set(call, num - 1);
    position.set(prevName, num);
  }

  return arr;
}
