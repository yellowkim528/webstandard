let str = '0';    // 숫자 0의 유니코드값 48
let str2 = '9';   // 숫자 9의 유니코드값 57
let str3 = 'A';   //  
let str4 = 'A';

const ch = ['0', '1', 'a', 'z', 'A', 'Z', '가', 'ㅎ'];

ch.forEach(ele => console.log(ele.charCodeAt(0)));
console.log(str.charCodeAt(0), str2.charCodeAt(0));
const arr = [3, 1, 11, 2];
// 오름차순
console.log(arr.sort((first, second) => { return first - second }));
// 내림차순
console.log(arr.sort((first, second) => { return second - first }));

const persons = [
  { name: '홍길동', age: 30, gender: '남' },
  { name: '홍길순', age: 20, gender: '여' },
  { name: '홍길용', age: 30, gender: '여' },
  { name: '홍길남', age: 40, gender: '남' }
];
// 오름차순
persons.sort((first,second) => {return first.age-second.age}) ;
console.log(persons);
// 내림차순
persons.sort((first,second) => {return second.age-first.age}) ;
console.log(persons);