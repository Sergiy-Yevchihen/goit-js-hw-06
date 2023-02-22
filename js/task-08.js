const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSabmit);

function onFormSabmit(ev) {
    ev.preventDefault(); 
     const { email, password } = ev.currentTarget.elements;
    if (email.value === '' || password.value === '') {
        return alert('Всі поля повинні бути заповнені!');

    } else {
        const formData = {
          email: email.value,
          password: password.value,
        };
    
    
        console.log(formData);
        ev.currentTarget.reset();
    }
}
