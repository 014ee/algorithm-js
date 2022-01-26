const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString());

function solution(N) {
  const hansu = new Array(99).fill(0)
  let result
  if(N < 100) result = N;  // 100 이하는 모두 한수
  
  for(let num = 100; num <= N; num++){ // 100~N 사이의 숫자
    let splitNum = String(num).split('')
    let diff = new Set();
    
    for(let i = 1; i < splitNum.length; i++){
      diff.add(splitNum[i - 1] - splitNum[i])
    }
    if(diff.size === 1){
      hansu.push(num)
    }
    result = hansu.length
  }
  
  console.log(result)
}

solution(input)
