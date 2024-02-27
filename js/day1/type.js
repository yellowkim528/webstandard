//자료형

let x = 10;
console.log(typeof(x)); //number
let y = 3.14;
console.log(typeof(y)); //number
let myname = '홍길동';  //"홍길동" 동일
console.log(typeof(myname)); //number
let flag = true;  // or false
console.log(typeof(flag)); //boolean

//falsy : 거짓으로 여겨지는 값 ex)0, "", [], {}. undefined, null
flag = 0;
console.log( flag ? '참' : '거짓'); 
flag = "";
console.log(flag ? '참' : '거짓'); 
//truety : 참으로 여겨지는값 ex) 0이 아닌 숫자, ""이 아닌 문자열, 요소가 있는 배열, 속성있는 객체
flag = 1;
console.log(flag ? '참' : '거짓'); 
flag = '홍길동';
console.log(flag ? '참' : '거짓'); 

let z;
console.log(typeof(z));

z = null; //값이 없음을 명시적으로 표현
console.log(typeof(z)); //object




