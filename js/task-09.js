function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// const textBackgroundColor = document.querySelector('.color');
// const changeColorButton = document.querySelector('.change-color');
// const body = document.body;

// const changeColor = () => {
//   textBackgroundColor.textContent = body.style.backgroundColor =
//     getRandomHexColor();
// };


// changeColorButton.addEventListener('click', changeColor);
function changeBackgroundColor() {
  const backgroundColor = getRandomHexColor();
  document.body.style.background = backgroundColor;
  document.querySelector('.color').textContent = backgroundColor;
}

const button = document.querySelector('.change-color');
button.addEventListener('click', changeBackgroundColor);