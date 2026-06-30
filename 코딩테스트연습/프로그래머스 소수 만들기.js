function solution(nums) {
  var answer = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let z = j + 1; z < nums.length; z++) {
        let boolean = true;

        if (nums[i] + nums[j] + nums[z] < 2) continue;
        for (let a = 2; a * a <= nums[i] + nums[j] + nums[z]; a++) {
          if ((nums[i] + nums[j] + nums[z]) % a === 0) {
            boolean = false;
            break;
          }
        }
        if (boolean) {
          answer++;
        }
      }
    }
  }

  return answer;
}
