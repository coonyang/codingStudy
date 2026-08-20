function solution(cacheSize, cities) {
  let answer = 0;
  let arr = [];

  if (cacheSize === 0) {
    return cities.length * 5;
  }

  for (let city of cities) {
    city = city.toLowerCase();

    if (arr.includes(city)) {
      answer += 1;

      arr = arr.filter((item) => item !== city);

      arr.push(city);
    } else {
      answer += 5;

      if (arr.length === cacheSize) {
        arr.shift();
      }

      arr.push(city);
    }
  }

  return answer;
}
