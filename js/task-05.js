const inputEl = document.querySelector("#name-input");
console.log(inputEl);
const spanEl = document.querySelector("#name-output");
//  

const onSpanElSabmit = ({ currentTarget }) => {
    if (currentTarget.value.trim() !== '') {
       spanEl.textContent = currentTarget.value.trim(); 
    } else{
        spanEl.textContent = 'Anonymous';
    }
    
};

inputEl.addEventListener('input', onSpanElSabmit);