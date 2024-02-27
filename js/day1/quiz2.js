// 아래 문제를 함수 선언문, 함수 표현식, 화살표 함수로 정의하고 호출되어 실행되는 코드를 작성해 보이시오.
// 문제 2)
// 문자열 결합 함수 만들기 concatStrings 라는 이름의 함수를 정의해보세요.
// 이 함수는 두 개의 숫자를 매개변수로 받아 하나의 문자열로 합쳐 반환해야 합니다.
// 함수 선언문
{
  function concatStrings (x,y){
    result = "" + x + y;
    return result;
  }
  console.log(concatStrings(10,20));
}
// 함수 표현식
{
  const concatStrings = function(x,y){
    result = "" + x + y;
    return result;
  }
  console.log(concatStrings(10,20));
}

// 화살표 함수
{
  const concatStrings = (x,y) => {
    result = "" + x + y;
    return result;
  }
  console.log(concatStrings(10,20));
}