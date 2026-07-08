function solution(wallpaper) {
  var answer = [];

  let 위x = 50;
  let 위y = 50;
  let 아래x = 0;
  let 아래y = 0;

  for (let y = 0; y < wallpaper.length; y++) {
    for (let x = 0; x < wallpaper[0].length; x++) {
      if (wallpaper[y][x] === "#") {
        위x = Math.min(위x, x);
        위y = Math.min(위y, y);
        아래x = Math.max(아래x, x);
        아래y = Math.max(아래y, y);
      }
    }
  }
  answer.push(위y, 위x, 아래y + 1, 아래x + 1);

  return answer;
}
