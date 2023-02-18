
 const counterBtn = {
  increment: document.querySelector("[data-action='increment']"),
  decrement: document.querySelector("[data-action='decrement']"),
  span: document.querySelector('#value'),
  wrapper: document.querySelector('#counter '),
};
let counterValue = 0;
const increment = () => {
  counterValue += 1;

  document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById('value').textContent = counterValue;
};
counterBtn.increment.addEventListener('click', increment);
counterBtn.decrement.addEventListener('click', decrement);