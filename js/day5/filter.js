{
  const persons = [
    { name: '홍길동', age: 30, gender: '남' },
    { name: '홍길순', age: 20, gender: '여' },
    { name: '홍길남', age: 40, gender: '남' }
  ];

  // 10세 이상 여성
  const filterPersons = persons.filter((ele, idx, Array) => { return ele.gender == '여' && ele.age >= 10 });
  console.log(filterPersons);

  // 10세 이상 여성의 이름
  const names = persons.filter(ele => ele.gender == '여' && ele.age >= 10).map(ele => ele.name);
  console.log(names);

  persons.filter(ele => ele.gender == '여' && ele.age >= 10).map(ele => ele.name).forEach(ele => console.log(ele));

  
}