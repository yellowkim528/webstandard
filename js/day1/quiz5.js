// 문제5] n배수 함수를 반환하는 함수를 정의하고 실행됨을 보이시오.
// 정수 1개를 매개값으로 전달하면 n배수된 값으로 반환해야합니다.

function f(n) {
  return function f(x) {
    return n*x;
  }
}
console.log(f(4)(3));

// 문제6] 배열과 n배수 함수를 입력받아 배열의 각 요소를 n배수하는 함수를 정의하고
//        실행됨을 보이시오.

function f2(arr,f){
  let result = [];
  for(let ele of arr){
    result.push(f(ele))
  }
  return result;
}
console.log(f2([1,2,3],f(2)));
console.log(f2([1,2,3],f(3)));
console.log(f2([1,2,3],f(4)));