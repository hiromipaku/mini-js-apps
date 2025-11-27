const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

const omikuji = ['great', 'good', 'soso', 'bad', 'very bad'];

btn.addEventListener('click', () => {
  const index = Math.floor(Math.random() * omikuji.length);
  result.innerText = omikuji[index];
});