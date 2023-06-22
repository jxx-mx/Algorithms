// 문제 출처: https://www.acmicpc.net/problem/1316

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

function check(data) {
  let setData = new Set(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    // 오른쪽 단어와 다르다면
    if (data[i] !== data[i + 1]) {
      // 이미 등장한 적이 있다면
      if (setData.has(data[i + 1])) {
        return false;
      } else {
        setData.add(data[i + 1]);
      }
    }
  }
  return true;
}

function foo() {
  let n = Number(input[0]);
  let summary = 0;
  for (let i = 1; i <= n; i++) {
    let data = input[i];
    if (check(data)) summary += 1;
  }
  console.log(summary);
}

foo();
