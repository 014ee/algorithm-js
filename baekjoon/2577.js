const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');
const a = input[0]
const b = input[1]
const c = input[2]
let sum = a * b * c

let counter = new Array(10).fill(0)

do{
  const num = sum % 10
  counter[num] ++
  sum = parseInt(sum / 10)
}while(sum > 0)

for(let i=0; i<counter.length; i++){
  console.log(counter[i])
}


// 좀 무식하게 푼 것 같아서 위와 같이 다시 작성함 (메모리/시간은 거의 차이 없는데, 아래 방법이 덜 사용되긴 했음)
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
