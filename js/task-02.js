const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];





const navEl = document.querySelector('#ingredients');


const elements = [];
for (let i = 0; i < ingredients.length; i += 1) {
 
 const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredients[i];
  elements.push(itemEl);
   
}

navEl.append(...elements);
console.log(navEl);