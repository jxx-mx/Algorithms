// 문제 출처: https://www.acmicpc.net/problem/2884

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
const data = input[0].split(" ");

let hour = Number(data[0]);
let minute = Number(data[1]);
const subtract_time = 45;

function alarmCalculator() {
  if (minute < subtract_time) {
    hour -= 1;
    minute += 15;

    if (hour < 0) {
      hour = 23;
    }
  } else minute -= subtract_time;

  console.log(hour, minute);
}

alarmCalculator();
