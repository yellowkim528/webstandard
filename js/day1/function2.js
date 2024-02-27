{
  const x = 10;
  const y = 20;

  console.log(add(x, y));

  function add(i, j) {
    console.log(x);
    console.log(y);
    return i + j;
  }
}

{
  const x = function (x, y) {
    return x + y;
  }
  // console.log(x(10, 20));
  // console.log(add(10, 20));

  console.log(add(x,20));

  function add(x, y) {
    return x(10,20) + y;
  }
}