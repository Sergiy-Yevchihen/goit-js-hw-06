const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');


const fontSizeControl = ({ currentTarget }) =>
  (textEl.style.fontSize = `${currentTarget.value}px`);

inputEl.addEventListener('input', fontSizeControl);