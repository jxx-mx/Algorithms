// 문제 번호: 백준 2588 https://www.acmicpc.net/problem/2588

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let firstParameter = input[0];
let secondParameter = input[1];

const units = secondParameter[2];
const tens = secondParameter[1];
const hundreds = secondParameter[0];

console.log(Number(firstParameter) * Number(units));
console.log(Number(firstParameter) * Number(tens));
console.log(Number(firstParameter) * Number(hundreds));
console.log(Number(firstParameter) * Number(secondParameter));
