let array = []

function solution (num){
  let sum = num
  
  while(1){
    if(num === 0) break;
    sum += num % 10; //주어진 정수를 뒤에서부터 나머지로 전환 후 더하기
    num = parseInt(num / 10); // 더한 숫자는 제외
  }
  
  array[sum] = sum; // 더해진 숫자의 배열에 넣기 (1 ==> 1번째 배열)
  return sum
}
  
  
for(let i = 1; i <= 10000; i++){
  solution(i);
  
  if(array[i] === undefined){
    console.log(i)
  }

}
