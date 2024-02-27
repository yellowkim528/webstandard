// 아래 문제를 함수 선언문, 함수 표현식, 화살표 함수로 정의하고 호출되어 실행되는 코드를 작성해 보이시오.
// 문제 4)
// 팩토리얼 구하는 함수 만들기 factorial 이라는 이름의 함수를 정의해보세요.
// 내부에서 재귀적으로 자신을 호출하는 로직을 표현식으로 정의해보세요.
// 이 함수는 하나의 숫자를 매개변수로 받아 그 합을 반환해야 합니다.
// 함수 선언문
{
  function factorial(x) {
    if (x == 0 || x == 1) {
      return 1;
    } else {
      return x * factorial(x - 1);
    }
  }
  console.log(factorial(4));
}
// 함수 표현식
{
  const factorial = function (x) {
    if (x == 0 || x == 1) {
      return 1;
    } else {
      return x * factorial(x - 1);
    }
  }
  console.log(factorial(4));
}

// 화살표 함수
{
  const factorial = x => {
    if (x == 0 || x == 1) {
      return 1;
    } else {
      return x * factorial(x - 1);
    }
  }
  console.log(factorial(4));
}