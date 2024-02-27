// Array.prototype.reduce() 활용하기

const numbers = [3, 2, 3, 6, 1, 5];
// 문1) 배열 요소의 평균을 구하시오
{
  const result = numbers.reduce((acc, cur, idx, arr) => (idx == arr.length - 1) ? (acc + cur) / arr.length : acc + cur, 0);
  console.log(result);
}
// 문2) 배열 요소중 최대값 구하시오
{
  const maxNum = numbers.reduce((acc, cur) => cur > acc ? cur : acc);
  console.log(maxNum);
}
const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];
// 문3) 과일의 갯수를 객체 리터럴로 출력하세요
// ex) {banana:1, apple:2, orange:2};
{
  const obj = {};
  fruits.forEach((ele, idx) => {
    if (ele in obj) {
      obj[ele]++;
    } else {
      obj[ele] = 1;
    }
  });
  console.log(obj);
}
{
  const result = fruits.reduce(
    (acc,cur,idx,arr) => {
      if(cur in acc) {
        acc[cur]++;
      }else {
        acc[cur] = 1;
      }
      return acc;
    },
    {}
  )
  console.log(result);
}

{
  const fruitsCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
  }, {});
  console.log(fruitsCount);
}
