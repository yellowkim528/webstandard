{
  const arr = [1, 2, 3];
  // console.log(typeof arr);
  // console.log(Object.prototype.toString.call(arr));
  arr.reduce((acc, ele, idx, self) => {
    console.log(acc, ele, idx, self);
    return acc + ele;
  });
}

console.log('------------------------------');

{
  const arr = [1, 2, 3];
  // console.log(typeof arr);
  // console.log(Object.prototype.toString.call(arr));
  const a = arr.reduce((acc, ele, idx, self) => {
    console.log(acc, ele, idx, self);
    return acc + ele;
  },0);
  console.log(a);
}

console.log('------------------------------');

{
  const arr = ['a','b','c'];
  const result = arr.reduce((acc,ele) => acc + ele);
  console.log(result);

}
// 문제] 주어진 객체 배열에서 모든 사람의 나이를 합하는 reduc 함수이용해서 풀어보기.
{
  let people = [
    { name: 'John', age: 21 },
    { name: 'Jane', age: 24 },
    { name: 'Smith', age: 27 },
    { name: 'Doe', age: 30 }
  ];

  console.log(people.map(ele => ele.age));  //  [21,24,27,30]
  const sumOfAge = people.map(ele => ele.age).reduce((acc,ele) => acc+ele);
  console.log(`나이총합은 ${sumOfAge} 입니다`);
}