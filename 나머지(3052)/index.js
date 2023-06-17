// 문제 출처: https://www.acmicpc.net/problem/3052

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let array = input.map(Number);
let deDuplicatedArray = new Set();

for (let i = 0; i < 10; i++) {
  deDuplicatedArray.add(array[i] % 42);
}

console.log(deDuplicatedArray.size);
