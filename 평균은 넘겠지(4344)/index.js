// 문제 출처: https://www.acmicpc.net/problem/4344

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// 1안
let testCases1 = Number(input[0]);

for (let t = 1; t <= testCases1; t++) {
  let data = input[t].split(" ").map(Number);
  let length = data[0];
  let sum = 0;

  for (let i = 1; i <= length; i++) {
    sum += data[i];
  }

  let average = sum / length;
  let count = 0;

  for (let i = 1; i <= length; i++) {
    if (data[i] > average) count += 1;
  }

  console.log(`${((count / length) * 100).toFixed(3)}%`);
}

// 2안
function aboveAverageRatio(scores) {
  const n = scores[0];
  const averages = scores.slice(1).reduce((sum, score) => sum + score, 0) / n;
  const aboveAverageCount = scores
    .slice(1)
    .filter((score) => score > averages).length;
  const aboveAveragePercentage = (aboveAverageCount / n) * 100;
  return aboveAveragePercentage.toFixed(3) + "%";
}

const testCaseCount = Number(input[0]);
const testCases2 = input.slice(1);

for (let i = 0; i < testCaseCount; i++) {
  const scores = testCases2[i].split(" ").map(Number);
  console.log(aboveAverageRatio(scores));
}
