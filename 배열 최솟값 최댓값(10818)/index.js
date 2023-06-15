// 문제 출처: https://www.acmicpc.net/problem/10818

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let length = Number(input[0]);
let data = input[1].split(" ").map(Number);

function useMath() {
  let maxNum = Math.max(...data);
  let minNum = Math.min(...data);

  console.log("Math", minNum, maxNum);
}

useMath();

function useLoop() {
  let maxValue = -1000001;
  let minValue = 1000001;

  for (let i = 0; i <= length; i++) {
    if (minValue > data[i]) minValue = data[i];
    if (maxValue < data[i]) maxValue = data[i];
  }
  console.log("loop", minValue, maxValue);
}

useLoop();

function useReduce() {
  let minValue = data.reduce((a, b) => Math.min(a, b));
  let maxValue = data.reduce((a, b) => Math.max(a, b));
  console.log("reduce", minValue, maxValue);
}

useReduce();
