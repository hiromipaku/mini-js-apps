// HTMLの要素を読み込む
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const addBtn = document.querySelector('#addBtn');
const subBtn = document.querySelector('#subBtn');
const result = document.querySelector('#result');

// 足し算ボタンを押したときの処理
addBtn.addEventListener('click', () => {
  // 入力された値を数字に変換して取り出す
  const a = Number(num1.value);
  const b = Number(num2.value);
  // 計算結果を画面に表示
  result.textContent = a + b;
});  

// 引き算ボタンを押したときの処理
subBtn.addEventListener('click', () => {
  // 入力された値を数字に変換して取り出す
  const c = Number(num1.value);
  const d = Number(num2.value);
  // 計算結果を画面に表示
  result.textContent = c - d;
});