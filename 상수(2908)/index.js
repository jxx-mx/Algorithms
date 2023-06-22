// 문제 출처: https://www.acmicpc.net/problem/2908

let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let data = input[0].split(" ");
let first = data[0].split("").reverse().join("");
let second = data[1].split("").reverse().join("");

console.log(Math.max(Number(first), Number(second)));
