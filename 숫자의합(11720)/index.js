// 문제 출처: https://www.acmicpc.net/problem/11720

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let string = input[1];
let reduceNumber = 0;

function foo() {
  for (let el of string) {
    reduceNumber += Number(el);
  }
  console.log(reduceNumber);
}

foo();
