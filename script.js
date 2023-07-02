const submitBtn = document.querySelector('[data-submit]');

const showSuccessAlert = () => {
    alert('Success !');
}

const validateEmail = () => {
    const emailInput = document.querySelector('[data-email]');
    const errorIcon = document.querySelector('[data-error-icon]');
    const errorMsg = document.querySelector('[data-error-msg]');
    if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/gi.test(emailInput.value) || emailInput.value.toLowerCase() !== emailInput.value) {
        emailInput.classList.add('error');
        errorIcon.classList.add('invalid');
        errorMsg.classList.add('invalid');
    } else {
        emailInput.value = '';
        emailInput.classList.remove('error');
        errorIcon.classList.remove('invalid');
        errorMsg.classList.remove('invalid');
        showSuccessAlert();
    }
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    validateEmail();
})