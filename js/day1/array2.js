// Array.prototype.splice()
{
  const arr = [1,2,3,4,5];
  console.log(arr.splice(2));   // 시작인덱스부터 끝까지 요소를 반환하고 원래배열에서 요소를 제거
  console.log(arr);
}

{
  const arr = [1,2,3,4,5];
  console.log(arr.splice(2,2));  // 시작인덱스부터 ,2개 제거
  console.log(arr);
}
console.log('--------------------')
{
  const arr= [1,2,3,4,5,];
  console.log(arr.splice(2,2,10,11));   // 시작인덱스부터 2개 제거하고 제거된 위치에 10,11 추가
  console.log(arr);
}