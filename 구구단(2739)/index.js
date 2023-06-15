// 문제 출처: https://www.acmicpc.net/problem/2739

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let data = Number(input[0]);

function multiplicationTable(num) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

multiplicationTable(data);
