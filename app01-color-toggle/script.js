const text = document.querySelector('#text');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
  text.classList.toggle('red');

  if (text.classList.contains('red')) {
    btn.innerText = '元に戻す';
  } else {
    btn.innerText = '赤にする';
  }
});