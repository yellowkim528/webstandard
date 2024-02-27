// 일반 for문
{
  const arr = [1, 2, 3];

  // case 1)
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
  }

  console.log('----------')
  // case 2)
  const f = (ele, idx, arr) => console.log(ele * 2);
  const f2 = function (ele, idx, arr) {
    console.log(ele * 2);
  }
  function f3(ele, idx, arr) {
    console.log(ele * 2);
  }
  arr.forEach(f);
  arr.forEach(f2);
  arr.forEach(f3);
  console.log('----------')
  arr.forEach((ele, idx, arr) => console.log(ele * 2));
  arr.forEach(function (ele, idx, arr) {
    console.log(ele * 2);
  })


}