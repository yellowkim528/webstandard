// 각 버튼 연결
const screen = document.querySelector('#screen');
const button = document.querySelectorAll('.btn');
const clear = document.querySelector('.btn-clear');
const equal = document.querySelector('.btn-equal');

// 사칙연산 버튼
button.forEach(ele => {
  ele.addEventListener('click', evt => {
   button.forEach(ele =>{
    ele.classList.remove('on');
   })
    clear.classList.remove('on');
    equal.classList.remove('on');
    screen.value += evt.target.innerText;
    evt.target.classList.add('on');
  })
})

// 'AC' 버튼
clear.addEventListener('click', (evt) => {
  button.forEach(ele => {
    ele.classList.remove('on')});
  equal.classList.remove('on');
  screen.value = '';
  evt.target.classList.add('on');
})

// '=' 버튼
equal.addEventListener('click', (evt) => {
  try{
    button.forEach(ele => {
      ele.classList.remove('on')});
    clear.classList.remove('on');
    evt.target.classList.add('on');
    screen.value = eval(screen.value);
  } catch(err){screen.value = 'Error'};
})
  
  
  
  