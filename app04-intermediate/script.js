const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => {
      t.classList.remove('active');
    });
    tab.classList.add('active');

    contents.forEach(c =>{
      c.classList.remove('active');
    });
    contents[index].classList.add('active');
  });
});

const checkboxes = document.querySelectorAll('.price');
const total = document.querySelector('#total');

checkboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    let sum = 0;

    checkboxes.forEach(c => {
      if(c.checked) {
        sum += Number(c.value);
      }
    });
    total.innerText = sum;
  });
});


const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => {
      c.classList.remove('selected');
    });
    card.classList.add('selected');
  });
});