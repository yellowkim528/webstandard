{
  console.log(true || true);
  console.log(true || false);
  console.log(false || true);
  console.log(false || false);
}

{
  console.log(false || 1);  // 1
  console.log(false && 1);  // false
  console.log(true || 1);   // true
  console.log(true && 1);   // 1
}

{
  const obj = { 'name': '홍길동', 'age': 30 };
  console.log(obj['name'] || 0);    // 홍길동
  console.log(obj['gender'] || 0);  // 0
  
  console.log(obj['age'] && obj['age']++);  // 0
  console.log(obj['age']);  //31  
  console.log(obj['age'] || 0); //31

}