function solution(k, dungeons) {
  let maxCount = 0;
  const visited = new Array(dungeons.length).fill(false);

  const backtrack = (fatigue, count) => {
    maxCount = Math.max(maxCount, count);

    for (let i = 0; i < dungeons.length; i++) {
      const [min, cost] = dungeons[i];
      if (!visited[i] && fatigue >= min) {
        visited[i] = true;
        backtrack(fatigue - cost, count + 1);
        visited[i] = false;
      }
    }
  };

  backtrack(k, 0);
  return maxCount;
}
