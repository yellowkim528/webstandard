{
  function f(n) {
    return function f(x) {
      return x * n;
    }
  }
}
// 위 함수를 화살표 함수로 표현하시오.
{
  const f = n => x => x * n;

  console.log(f(2)(3));   //6
  console.log(f(3)(10));  //30

  const arr = [1, 2, 3];

  function f2(arr, x, f) {
    for(let ele of arr){
      console.log(f(x)(ele));
    }
  }

  f2(arr, 4, f);
  f2(arr, 4, n => x => x * n);
}
