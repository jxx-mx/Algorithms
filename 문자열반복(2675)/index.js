// 문제 출처: https://www.acmicpc.net/problem/2675

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let testCase = Number(input[0]);

function foo() {
  for (let i = 1; i <= testCase; i++) {
    let [r, s] = input[i].split(" ");
    let result = "";
    for (let j = 0; j <= s.length; j++) {
      result += s.charAt(j).repeat(r);
    }
    console.log(result);
  }
}

foo();
