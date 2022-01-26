var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var a = parseInt(input[0]);

function solution(N) {
  const hansu = new Array(99).fill(0)
  let result
  if(N < 100) result = N;  // 100 이하는 모두 한수
  
  for(let i = 100; i <= N; i++){ // 100~N사이의 숫자
    let splitArr = String(i).split('')
    let diff = new Set();
    
    for(let j = 1; j < splitArr.length; j++){
      diff.add(splitArr[j - 1] - splitArr[j])
    }
    if(diff.size === 1){
      hansu.push(i)
    }
    result = hansu.length
  }
  
  console.log(result)
}

solution(a)
