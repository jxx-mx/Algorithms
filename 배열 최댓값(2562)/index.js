// 문제 출처: https://www.acmicpc.net/problem/2562

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 1안
function foo() {
  let array = input.map((x) => Number(x));
  let maxValue = Math.max(...array);
  console.log(maxValue, array.indexOf(maxValue) + 1);
}
foo();

// 2안
function bar() {
  let maxIndex = 0;
  let maxValue = 0;
  for (let i = 0; i < input.length; i++) {
    let data = Number(input[i]);
    if (maxValue < data) {
      maxValue = data;
      maxIndex = i;
    }
  }
  console.log(maxValue, maxIndex + 1);
}
bar();
