function solution(skill, skill_trees) {
  var answer = 0;

  // 1. skill_trees에서 스킬트리를 하나 꺼냄
  // 2. 그 스킬트리를 앞에서부터 확인
  // 3. 해당 스킬이 skill에 포함되어 있는지 확인
  // 4. 포함되어 있다면 현재 필요한 순서의 스킬인지 확인
  // 5. 맞으면 x++
  // 6. 틀리면 불가능한 스킬트리
  // 7. 끝까지 확인했으면 가능한 스킬트리
  for (let a of skill_trees) {
    let bool = true;
    let x = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i].includes(skill)) {
        if (skill[x] === a[i]) {
          x++;
        } else {
          bool = false;
          break;
        }
      }
    }
    if (bool) {
      answer++;
    }
  }

  return answer;
}
