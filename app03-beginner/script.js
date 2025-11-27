const input = document.querySelector('#nameInput');
const output = document.querySelector('#output');

input.addEventListener('input', () => {
  output.innerText = `welcome ${input.value}!`;
});

const box = document.querySelector('#box');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  box.classList.toggle('active');
});

const display = document.querySelector('#display');
const items = document.querySelectorAll('li');

items.forEach(item => {
  item.addEventListener('click', () => {
    display.innerText = item.innerText;
  });
});
