// 문제 출처: https://www.acmicpc.net/problem/1546

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let length = Number(input[0]);
let scores = input[1].split(" ").map(Number);
let maxNum = Math.max(...scores);
let updateScores = [];

function foo() {
  for (let i = 0; i < length; i++) {
    updateScores.push((scores[i] / maxNum) * 100);
  }
  console.log(updateScores.reduce((acc, cur) => acc + cur) / length);
}

foo();
