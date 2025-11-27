const input = document.querySelector('#todoInput');
const btn = document.querySelector('#addBtn');
const list = document.querySelector('#todoList');

btn.addEventListener('click', () => {
  const text = input.value;
  if (text === "")return;

  const li = document.createElement('li');
  li.textContent = text;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  list.appendChild(li);

  input.value = "";

});