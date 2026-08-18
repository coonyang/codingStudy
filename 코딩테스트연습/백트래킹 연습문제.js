// 숫자가 있어.

// let numbers = [1, 2, 3];

// 여기서 숫자를 2개 선택해서 만들 수 있는 모든 경우를 출력해봐.

// 결과:

// 1 2
// 1 3
// 2 1
// 2 3
// 3 1
// 3 2

// 단, 같은 숫자를 두 번 사용할 수 없어.

function a() {
  let numbers = [1, 2, 3];

  let visited = [false, false, false];
  let result = [];

  function backtrack() {
    if (result.length === 2) {
      console.log(result);
      return;
    }
    for (let i = 0; i < numbers.length; i++) {
      if (!visited[i]) {
        result.push(numbers[i]);
        visited[i] = true;

        backtrack();
        result.pop();
        visited[i] = false;
      }
    }
  }
  backtrack();
}

// 문제 2 — 3개 선택하기

// 문제 1을 풀었다면 바로 이걸 해봐.

// let numbers = [1, 2, 3, 4];

// 여기서 3개를 선택해서 만들 수 있는 모든 경우를 구해.

// 예:

// 1 2 3
// 1 2 4
// 1 3 2
// 1 3 4
// 1 4 2
// 1 4 3
// ...

// 총 몇 개가 나올지도 생각해봐.

function b() {
  let numbers = [1, 2, 3, 4];

  let visited = [false, false, false, false];
  let result = [];
  let count = 0;

  function backtrack() {
    if (result.length === 3) {
      count++;
      console.log(result);
      return;
    }
    for (let i = 0; i < numbers.length; i++) {
      if (!visited[i]) {
        result.push(numbers[i]);
        visited[i] = true;

        backtrack();

        visited[i] = false;
        result.pop();
      }
    }
  }

  backtrack();
  console.log(count);
}
