// 문제 출처: https://www.acmicpc.net/problem/2480

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let [first, second, third] = input[0].split(" ").map(Number);

function calculator() {
  if (first === second && second === third) console.log(10000 + first * 1000);
  else if (first === second) console.log(1000 + first * 100);
  else if (first === third) console.log(1000 + first * 100);
  else if (second === third) console.log(1000 + second * 100);
  else console.log(Math.max(first, second, third) * 100);
}
calculator();
