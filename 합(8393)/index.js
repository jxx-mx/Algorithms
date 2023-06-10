// 문제 출처: https://www.acmicpc.net/problem/8393

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
let data = Number(input[0]);

let result = 0;

function reducer() {
  for (let i = 0; i <= data; i++) {
    result += i;
  }
  console.log(result);
}
reducer();
