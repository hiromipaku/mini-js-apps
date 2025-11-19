const input = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addBtn');
const todoList = document.querySelector('#todoList');

// ② 追加ボタンを押した時
addBtn.addEventListener('click', () => {

    // 入力が空だったら何もしない
    if (input.value === " ") return;

    // ③ <li> を作る
    const li = document.createElement('li');
    li.innerText = input.value;

    // ④ 完了（線を引く）機能
    li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

    // ⑤ リストに追加
    todoList.appendChild(li);

    // ⑥ 入力欄を空にする
    input.value = " ";

});
