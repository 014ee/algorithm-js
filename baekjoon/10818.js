const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const count = Number(input[0]);
const num = input[1].split(' ')

let min = Number(num[0])
let max = Number(num[0])

for(let i = 0; i < count; i++){
  let number = Number(num[i])
  if(number < min) min = number;
  if(number > max) max = number;
}

console.log(min, max)
 
 
 // 아래와 같이 풀었다가 수행 시간 평균 3배 이상 걸려서 위와 같이 수정함
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const count = Number(input[0]);
const num = input[1].split(' ');
num.sort((a,b) => a - b)

const min = num[0]
const max = num[num.length-1]

console.log(min, max)
