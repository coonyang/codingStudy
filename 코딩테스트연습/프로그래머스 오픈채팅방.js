function solution(record) {
  var answer = [];

  // 1. " " 기준으로 들어왔는지 나가는지 / uid / 이름 으로 나눈다
  // 2. uid 이름을 오브젝트 형식으로 저장해놓는다
  // 3. Change 기록만 찾아 최종 이름을 설정한다
  // 4. 처음 나눈 입출 기록으로 누가 들어오고 나갔는지 출력

  let arr2 = [];
  let arr3 = [];
  let arr4 = [];
  for (let a of record) {
    let obj = {};
    let arr = a.split(" ");
    if (arr[0] !== "Change") {
      arr2.push(arr[0]);
      arr4.push(arr[1]);
    }
    if (arr[0] === "Enter") {
      let user = arr3.find((obj) => obj.uid === arr[1]);
      if (user === undefined) {
        obj.uid = arr[1];
        obj.nick = arr[2];
        arr3.push(obj);
      } else {
        user.nick = arr[2];
      }
    }
    if (arr[0] === "Change") {
      let user = arr3.find((obj) => obj.uid === arr[1]);
      if (user === undefined) {
        obj.uid = arr[1];
        obj.nick = arr[2];
        arr3.push(obj);
      } else {
        user.nick = arr[2];
      }
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let user = arr3.find((obj) => obj.uid === arr4[i]);
    if (arr2[i] === "Enter") {
      answer.push(`${user.nick}님이 들어왔습니다.`);
    } else {
      answer.push(`${user.nick}님이 나갔습니다.`);
    }
  }

  return answer;
}

// users 를 오브젝트로 만들어서 uid = 닉네임 형식으로 저장하여 단축한 코드

function solution(record) {
  var answer = [];

  let arr2 = [];
  let arr4 = [];
  let users = {};

  for (let a of record) {
    let arr = a.split(" ");

    if (arr[0] === "Enter" || arr[0] === "Change") {
      users[arr[1]] = arr[2];
    }
    if (arr[0] !== "Change") {
      arr2.push(arr[0]);
      arr4.push(arr[1]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let nick = users[arr4[i]];

    if (arr2[i] === "Enter") {
      answer.push(`${nick}님이 들어왔습니다.`);
    } else {
      answer.push(`${nick}님이 나갔습니다.`);
    }
  }

  return answer;
}
