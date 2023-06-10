// 문제 출처: https://www.acmicpc.net/problem/8393

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
let n = Number(input[0]);

// for문 이용
let result = 0;
function reducer() {
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  console.log(result);
}
reducer();

// 등차수열 합 공식 이용
function foo() {
  console.log((n * (n + 1)) / 2);
}
foo();
