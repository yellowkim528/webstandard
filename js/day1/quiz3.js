// 아래 문제를 함수 선언문, 함수 표현식, 화살표 함수로 정의하고 호출되어 실행되는 코드를 작성해 보이시오.
// 문제 3)
// 배열의 모든 요소를 더하는 함수 만들기 sumArray 라는 이름의 함수를 정의해보세요.
// 이 함수는 숫자로 이루어진 배열을 매개변수로 받아 그 합을 반환해야 합니다.
// 함수 선언문
{
  function sumArray(arr1,arr2){
    let sum1 = 0;
    let sum2 = 0;
    for(let ele of arr1){
      sum1 += ele;
    }
    for(let ele of arr2){
      sum2 += ele;
    }
    return sum1 + sum2;
  }
  const arr1 = [1,2,3]
  const arr2 = [4,5,6,7]
  console.log(sumArray(arr1,arr2));
}
// 함수 표현식
{
  const sumArray = function sumArray(arr1,arr2){
    let sum1 = 0;
    let sum2 = 0;
    for(let ele of arr1){
      sum1 += ele;
    }
    for(let ele of arr2){
      sum2 += ele;
    }
    return sum1 + sum2;
  }
  const arr1 = [1,2,3]
  const arr2 = [4,5,6,7]
  console.log(sumArray(arr1,arr2));
}

// 화살표 함수
{
  const sumArray = (arr1,arr2) => {
    let sum1 = 0;
    let sum2 = 0;
    for(let ele of arr1){
      sum1 += ele;
    }
    for(let ele of arr2){
      sum2 += ele;
    }
    return sum1 + sum2;
  }
  const arr1 = [1,2,3]
  const arr2 = [4,5,6,7]
  console.log(sumArray(arr1,arr2));
}