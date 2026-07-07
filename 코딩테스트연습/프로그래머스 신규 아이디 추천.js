function solution(new_id) {
  var answer = "";

  let id = new_id.toLowerCase().replace(/[^a-z0-9._-]/g, "");

  for (let i = 0; i < id.length - 1; i++) {
    if (id[i] + id[i + 1] === "..") {
      id = id.slice(0, i) + id.slice(i + 1);
      i--;
    }
  }
  if (id[0] === ".") {
    id = id.slice(1);
  }
  if (id[id.length - 1] === ".") {
    id = id.slice(0, -1);
  }

  if (id.length === 0) {
    id += "a";
  }
  if (id.length >= 16) {
    id = id.slice(0, 15);
    if (id[id.length - 1] === ".") {
      id = id.slice(0, -1);
    }
  }
  if (id.length <= 2) {
    let a = id[id.length - 1];
    for (let i = id.length; i < 3; i++) {
      id += a;
    }
  }
  answer += id;
  return answer;
}
