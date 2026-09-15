function solution(files) {
  var answer = [];

  // 1. 각 파일을 HEAD NUMBER TAIL로 나눠 오브젝트로 저장한다
  // 2. 정렬에서 HEAD를 비교한후 같으면 NUMBER로 비교

  let arr2 = [];

  for (let a of files) {
    let obj = {};
    let b = a.toLowerCase();
    let arr = b.match(/^([a-zA-Z]+)(\d+)(.*)$/);
    obj.HEAD = arr[1];
    obj.NUMBER = arr[2];
    obj.TAIL = arr[3];
    obj.FILE = a;
    arr2.push(obj);
  }

  arr2.sort((a, b) => {
    if (a.HEAD < b.HEAD) {
      return -1;
    }

    if (a.HEAD > b.HEAD) {
      return 1;
    }

    if (Number(a.NUMBER) < Number(b.NUMBER)) {
      return -1;
    }

    if (Number(a.NUMBER) > Number(b.NUMBER)) {
      return 1;
    }

    return 0;
  });

  for (let a of arr2) {
    answer.push(a.FILE);
  }

  return answer;
}
