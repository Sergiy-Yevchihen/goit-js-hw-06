const inputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');
textEl.style.fontSize = inputEl.value + 'px';

const fontSizeControl = ({ currentTarget }) =>
  (textEl.style.fontSize = `${currentTarget.value}px`);

inputEl.addEventListener('input', fontSizeControl);