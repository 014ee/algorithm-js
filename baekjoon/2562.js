const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n').map(item => Number(item) );

let max = Math.max(...input)
let index = input.indexOf(max) + 1

console.log(max)
console.log(index)


// 아래와 같이 했을때 콘솔에서는 답이 잘 나오는데 '틀렸습니다'가 계속 나온다. (왜 그러는지 아직도 모르겠음ㅡㅡ)
const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split('\n');

let max = input[0]
let index = 0

for(let i = 0; i<input.length; i++){
  let number = Number(input[i])
  if(number > max) {
    max = number;
    index = i + 1
  }
}

console.log(max)
console.log(index)
