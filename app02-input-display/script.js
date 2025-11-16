const input = document.querySelector('#nameInput');
const output = document.querySelector('#output');

input.addEventListener('input', () => {
  output.innerText = `こんにちは、${input.value}さん！`;
});