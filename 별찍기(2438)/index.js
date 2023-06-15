// 문제 출처: https://www.acmicpc.net/problem/2438

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let data = Number(input[0]);

function makeStar(num) {
  let star = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      star += "*";
    }
    star += "\n";
  }
  console.log(star);
}

makeStar(data);
