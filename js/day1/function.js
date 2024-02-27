//함수 선언문
{
  function add(x, y) {
    return x + y;
  }
  console.log(add(10, 20));
}

//함수 표현식 : 함수를 변수에 할당하는 방식
{
  const add = function (x, y) {
    return x + y;
  }
  console.log(add(10, 20));
}

//화살표 함수 : 함수 표현식의 간결 표현. 주로 함수내 실행문 1개일때 유용
//case 1) 함수 표현식에서 function 키워드가 빠지고 매개변수와 본문사이에 화살표가 추가
{
  const add = (x,y) => {
    return x + y;
  };
  console.log(add(10,20));
}
//case 2) 함수 본문 내 실행문이 1개일 경우 중괄호{} 생략가능
//        실행문 1개가 return 문이면 return 생략
{
  const add = (x,y) =>  x + y;
  console.log(add(10,20));
}



