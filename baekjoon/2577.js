// 좀 무식하게 푼 듯;;
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const a = input[0]
const b = input[1]
const c = input[2]
let sum = a * b * c
sum = sum.toString().split('')

let zero = 0
let one = 0
let two = 0
let three = 0
let four = 0
let five = 0
let six = 0
let seven = 0
let eight = 0
let nine = 0

for(let i = 0; i < sum.length; i++){
  if(sum[i] == 0) zero += 1
  if(sum[i] == 1) one += 1
  if(sum[i] == 2) two += 1
  if(sum[i] == 3) three += 1
  if(sum[i] == 4) four += 1
  if(sum[i] == 5) five += 1
  if(sum[i] == 6) six += 1
  if(sum[i] == 7) seven += 1
  if(sum[i] == 8) eight += 1
  if(sum[i] == 9) nine += 1
}

console.log(zero)
console.log(one)
console.log(two)
console.log(three)
console.log(four)
console.log(five)
console.log(six)
console.log(seven)
console.log(eight)
console.log(nine)
