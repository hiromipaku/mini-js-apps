const number = document.querySelector('#number');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const reset = document.querySelector('#reset');

let count = 0;

plus.addEventListener('click', () => {
  count++;
  number.innerText = count;
})

minus.addEventListener('click', () => {
  count--;
  number.innerText = count;
})

reset.addEventListener('click', () =>{
  count = 0;
  number.innerText = count;
})