// 문제 출처: https://www.acmicpc.net/problem/15552

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let testCase = Number(input[0]);

function sum() {
  let result = "";
  for (let i = 1; i <= testCase; i++) {
    let data = input[i].split(" ");
    let a = Number(data[0]);
    let b = Number(data[1]);
    result += a + b + "\n";
  }
  console.log(result);
}

sum();
