function solution(priorities, location) {
  var answer = 0;

  let queue = priorities.map((priority, index) => ({
    priority,
    index,
  }));

  let count = 0;

  while (queue.length) {
    let current = queue.shift();
    if (queue.some((process) => process.priority < current.priority)) {
      queue.push(current);
    } else {
      count++;

      if (current.index === location) {
        answer = count;
        break;
      }
    }
  }

  return answer;
}
