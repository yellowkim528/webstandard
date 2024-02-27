// 함수를 값으로 다룰 수 있다.

//1) 함수를 변수에 저장할 수 있다.
// 어떤 기능을 변수에 저장해 두었다 필요할 때 사용할 수 있다.
{
  const f1 = function (arr,f) {
    for (let i = 0; i < arr.length; i++) {
      console.log(f(arr[i]));
    }
  }

  const f2 = function (x, y) {
    return x * 2;
  }

}

//2) 함수를 매개값으로 받을 수 있다.
// 어떤 기능을 전달 받아 기존 기능을 강화 할 수 있다.
{
  const f1 = function (arr,f) {
    for (let i = 0; i < arr.length; i++) {
      console.log(f(arr[i]));
    }
  }

  const f2 = function (x, y) {
    return x * 2;
  }

  const arr = [1,2,3];

  f3(arr,f1,f2);

  function f3(arr,f1,f2){
    
  }
}

//3) 함수를 반환값으로 전달할 수 있다.
// 어떤 기능을 새로운 기능으로 변환하여 전달 할 수 있다.


//1) 배열을 순회하는 기능
{
  const arr = [1, 2, 3];
  const x = literate(arr);


  // x(1);
  // x(2);
  // x(3);
  literate(arr)(1);
  literate(arr)(2);
  literate(arr)(3);

  function literate(arr) {

    return function (x) {
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] * x);
      }
    }
  }

  function literate1X(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }

  function literate2X(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i] * 2);
    }
  }

  function literate3X(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i] * 3);
    }
  }
}