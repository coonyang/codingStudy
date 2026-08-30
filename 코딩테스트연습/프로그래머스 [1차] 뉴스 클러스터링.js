function solution(str1, str2) {
  var answer = 0;
  let arr1 = [];
  let arr2 = [];
  let count1 = 0;

  for (let i = 0; i < str1.length - 1; i++) {
    let a = str1[i] + str1[i + 1];
    if (/^[a-zA-Z]{2}$/.test(a)) {
      arr1.push(a.toLowerCase());
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    let a = str2[i] + str2[i + 1];
    if (/^[a-zA-Z]{2}$/.test(a)) {
      arr2.push(a.toLowerCase());
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i]);

    if (index !== -1) {
      count1++;
      arr2.splice(index, 1);
    }
  }

  let count2 = arr1.length + arr2.length;
  answer = Math.floor((count1 / count2) * 65536);
  return answer;
}
