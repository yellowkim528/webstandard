// 아래 문제를 함수 선언문, 함수 표현식, 화살표 함수로 정의하고 호출되어 실행되는 코드를 작성해 보이시오.
// 문제 1)
// 두 수의 차이(절대값)을 구하는 함수 만들기 calculateDifference 라는 이름의 함수를 정의해보세요.
// 이 함수는 두 개의 숫자를 매개변수로 받아 두 수의 차이를 반환해야 합니다.
// case1) 함수 선언문
{
  function calculateDifference(x, y) {
    if (x - y < 0) {
      return y - x;
    } else { return x - y };
  }
  console.log(calculateDifference(10, 20));
}

// case2) 함수 표현식
{
  const calculateDifference = function(x, y) {
    if (x - y < 0) {
      return y - x;
    } else { return x - y };
  }
  console.log(calculateDifference(30, 20));
}

// case 3) 화살표 함수
{
  const calculateDifference = (x, y) => {
    if (x - y < 0) {
      return y - x;
    } else { return x - y };
  }
  console.log(calculateDifference(30, 20));
}

