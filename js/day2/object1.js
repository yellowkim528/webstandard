// 자바스크립트에서 객체 만들기
{
  class Person {
    // 생성자 메소드
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
    // 인스턴스 메소드
    smile(){
      console.log('웃다');
    }
    
    eat(){
      console.log('먹다');
    }
  }
  const person = new Person('홍길동',30);
  console.log(person.name, person.age);
  person.smile();
  person.eat();
}


// 2) 생성자 함수 : 객체를 만들기위한 함수
{
  function Person(name, age){
    //속성
    this.name = name;
    this.age = age;
    
    //메소드
    this.smile = function(){
      console.log('웃다');
    }
    this.eat = function(){
      console.log('먹다');
    }
  }
  const person = new Person('홍길동',30);
  console.log(person.name, person.age);
  person.smile();
  person.eat();
}

// 3) 일회성 객체 만들기
const person = {
  name:'홍길동',
  age:30,
  smile(){
    console.log('웃다');
  },
  eat(){
    console.log('먹다');
  }
}
// console.log(person,typeof person);

console.log(person.name, person.age);
person.smile();
person.eat();


