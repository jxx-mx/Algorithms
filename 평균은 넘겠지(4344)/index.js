// 문제 출처: https://www.acmicpc.net/problem/4344

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let testCases = Number(input[0]);

for (let t = 1; t <= testCases; t++) {
  let data = input[t].split(" ").map(Number);
  let length = data[0];
  let sum = 0;

  for (let i = 1; i <= length; i++) {
    sum += data[i];
  }

  let average = sum / length;
  let count = 0;

  for (let i = 1; i <= length; i++) {
    if (data[i] > average) count += 1;
  }

  console.log(`${((count / length) * 100).toFixed(3)}%`);
}
