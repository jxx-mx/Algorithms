// 문제 번호: 백준 9498 https://www.acmicpc.net/problem/9498

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

function checkGrade(score) {
  if (score >= 90) console.log("A");
  else if (80 <= score && score <= 89) console.log("B");
  else if (70 <= score && score <= 79) console.log("C");
  else if (60 <= score && score <= 69) console.log("D");
  else console.log("F");
}

checkGrade(Number(input[0]));
