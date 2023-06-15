// 문제 출처: https://www.acmicpc.net/problem/10818

/**
 * web에서 제공되는 api를 사용한 경우가 반복문을 사용한 경우보다 빠른 성능을 보이는 반면 메모리를 조금 더 사용함.
 * useWebApi: 92088KB, 436ms
 * useLoop: 88340KB, 484ms
 */

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let length = Number(input[0]);
let data = input[1].split(" ").map(Number);

function useWebApi() {
  let maxNum = Math.max(...data);
  let minNum = Math.min(...data);

  console.log("hi", minNum, maxNum);
}

useWebApi();

function useLoop() {
  let maxValue = -1000001;
  let minValue = 1000001;

  for (let i = 0; i <= length; i++) {
    if (minValue > data[i]) minValue = data[i];
    if (maxValue < data[i]) maxValue = data[i];
  }
  console.log(minValue, maxValue);
}

useLoop();
