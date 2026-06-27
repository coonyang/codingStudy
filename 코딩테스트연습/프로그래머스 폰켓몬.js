function solution(nums) {
  var answer = 0;

  let arr = [...new Set(nums)];

  if (arr.length < nums.length / 2) {
    answer = arr.length;
  } else {
    answer = nums.length / 2;
  }

  return answer;
}
