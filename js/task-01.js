const listWithEl = document.querySelectorAll('.item'); 

console.log(`Number of categories: ${listWithEl.length}`);

listWithEl.forEach((elem) => {  
console.log(`Category: ${elem.firstElementChild.textContent}
Elements: ${elem.lastElementChild.children.length}`);

 });

