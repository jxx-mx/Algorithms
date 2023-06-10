// 문제 번호: https://www.acmicpc.net/problem/2525

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let [h, m] = input[0].split(" ").map(Number);
let cookingTime = Number(input[1]);

// 1안
function timeChecker1() {
  m += cookingTime;
  if (m >= 60) {
    h += m / 60;
    m = m % 60;
    if (h > 23) h = 0;
  }
  console.log("1", Math.floor(h), m);
}
timeChecker1();

// 2안
function timeChecker2() {
  let totalMin = h * 60 + m + cookingTime;
  totalMin %= 1440;
  let hour = Math.floor(totalMin / 60);
  let minute = totalMin % 60;
  console.log("2", hour, minute);
}
timeChecker2();
